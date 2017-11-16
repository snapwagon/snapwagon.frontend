import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';

export const ORG_REQUEST = '@@org/ORG_REQUEST';
export const ORG_SUCCESS = '@@org/ORG_SUCCESS';
export const ORG_FAILURE = '@@org/ORG_FAILURE';
export const organization = () => ({
  [RSAA]: {
    endpoint: '/api/organization/',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      ORG_REQUEST, ORG_SUCCESS, ORG_FAILURE
    ]
  }
});
