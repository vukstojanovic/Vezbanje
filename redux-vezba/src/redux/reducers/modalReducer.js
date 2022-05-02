import actionTypes from "../actions/actionTypes";

export default function modalReducer(state = false, action) {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return true;
    case actionTypes.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
}
