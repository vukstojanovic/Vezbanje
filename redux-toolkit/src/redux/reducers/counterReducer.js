import { createSelector, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
  },
});

export const countSelector = createSelector(
  (state) => state.counter.count,
  (count) => count + 1
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
