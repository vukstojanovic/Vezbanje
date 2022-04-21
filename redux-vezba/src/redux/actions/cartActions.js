import actionTypes from "../actions/actionTypes";

export function add(item) {
  return {
    type: actionTypes.ADD,
    payload: item,
  };
}

export function del() {
  return {
    type: actionTypes.DELETE,
  };
}
