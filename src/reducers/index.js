import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth, * as fromAuth from './auth.js';
import organization, * as fromOrg from './org.js';

export default combineReducers({
  auth,
  organization,
  router: routerReducer
});
export const isAuthenticated =
 (state) => fromAuth.isAuthenticated(state.auth);
export const accessToken =
  (state) => fromAuth.accessToken(state.auth);
export const isAccessTokenExpired =
  (state) => fromAuth.isAccessTokenExpired(state.auth);
export const refreshToken =
  (state) => fromAuth.refreshToken(state.auth);
export const isRefreshTokenExpired =
  (state) => fromAuth.isRefreshTokenExpired(state.auth);
export const authErrors =
  (state) => fromAuth.errors(state.auth);
export const serverOrg =
  (state) => fromOrg.serverOrg(state.organization);

export function withAuth(headers = {}) {
  return (state) => ({
    ...headers,
    Authorization: `Bearer ${accessToken(state)}`
  });
}
