import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';

export const REQUEST = '@@org/REQUEST';
export const SUCCESS = '@@org/SUCCESS';
export const FAILURE = '@@org/FAILURE';
export const organization = () => ({
  [RSAA]: {
    endpoint: '/api/organization/',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      REQUEST, SUCCESS, FAILURE
    ]
  }
});
