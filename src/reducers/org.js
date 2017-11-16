import * as organization from '../actions/organization';

const initialState = {
  organization: undefined
};
export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case organization.ORG_SUCCESS:
      return {
        organization: action.payload.org
      };
    default:
      return state;
  }
};
export const serverOrg = (state) => state.organization;
