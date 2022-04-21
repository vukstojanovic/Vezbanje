import actionTypes from "../actions/actionTypes";

export default function loginReducer(state = false, action) {
  switch (action.payload) {
    case actionTypes.LOGIN:
      return true;
    case actionTypes.LOGOUT:
      return false;
    default:
      return state;
  }
}
