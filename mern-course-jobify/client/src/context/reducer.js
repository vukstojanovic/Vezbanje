import actionTypes from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values",
      };
    case actionTypes.CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };
    default:
      return state;
  }
};

export default reducer;
