import actionTypes from "../actions/actionTypes";
import { createSelector } from "reselect";

const initState = {
  arr: [
    { id: 1, name: "jetpack" },
    { id: 2, name: "sword" },
    { id: 3, name: "helmet" },
  ],
  length: 5,
};

export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD:
      const array = state.arr;
      const addedState = [...array, action.payload];
      return { ...state, arr: addedState };
    case actionTypes.DELETE:
      const deletedState = state.arr.slice(0, state.arr.length - 1);
      return { ...state, arr: deletedState };
    default:
      return state;
  }
}

export const nameSelector = createSelector(
  (state) => state.arr,
  (array) => {
    return array.map((item) => item.name);
  }
);
