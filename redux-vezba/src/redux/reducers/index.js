import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";
import modalReducer from "./modalReducer";

const allReducers = combineReducers({
  cart: cartReducer,
  login: loginReducer,
  modal: modalReducer,
});

export default allReducers;
