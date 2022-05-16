import actionTypes from "./actionTypes";

function displayAlert() {
  return {
    type: actionTypes.DISPLAY_ALERT,
  };
}

function clearAlert() {
  return {
    type: actionTypes.CLEAR_ALERT,
  };
}

export { displayAlert, clearAlert };
