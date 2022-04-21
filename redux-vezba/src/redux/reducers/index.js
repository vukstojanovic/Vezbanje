import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";

const allReducers = combineReducers({
  cart: cartReducer,
  login: loginReducer,
});

export default allReducers;
