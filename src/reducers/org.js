import * as organization from '../actions/organization';

const initialState = {
  organization: undefined
};
export default (state = initialState, action) => {
  switch (action.type) {
    case organization.SUCCESS:
      return {
        organization: action.payload
      };
    default:
      return state;
  }
};
export const serverOrg = (state) => state.organization;
