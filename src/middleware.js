import { isRSAA, apiMiddleware } from 'redux-api-middleware';

import { TOKEN_RECEIVED, refreshAccessToken } from './actions/auth';
import { refreshToken, isAccessTokenExpired } from './reducers';


export function createApiMiddleware() {
  const postponedRSAAs = [];

  return ({ dispatch, getState }) => {
    const rsaaMiddleware = apiMiddleware({dispatch, getState});

    return (next) => (action) => {
      const nextCheckPostoned = (nextAction) => {
        // Run postponed actions after token refresh
        if (nextAction.type === TOKEN_RECEIVED) {
          next(nextAction);
          postponedRSAAs.forEach((postponed) => {
            rsaaMiddleware(next)(postponed);
          });
        } else {
          next(nextAction);
        }
      };

      if (isRSAA(action)) {
        const state = getState();
        const token = refreshToken(state);

        if (token && isAccessTokenExpired(state)) {
          postponedRSAAs.push(action);
          if (postponedRSAAs.length === 1) {
            return rsaaMiddleware(nextCheckPostoned)(refreshAccessToken(token));
          }
          return undefined;
        }

        return rsaaMiddleware(next)(action);
      }
      return next(action);
    };
  };
}

export default createApiMiddleware();
