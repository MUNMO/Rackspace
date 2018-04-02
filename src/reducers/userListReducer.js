import * as types from '../actions/actionTypes';

export default function userListReducer(state = {}, action) {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return state;
    case types.FETCH_SUCCESS:
      return [...state, action.usertabledata];
      
    default:
        return state;
  }
}