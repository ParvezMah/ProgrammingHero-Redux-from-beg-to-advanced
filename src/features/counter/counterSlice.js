
// Business logic of individual features

import { createSlice } from "@reduxjs/toolkit";

const initialState = { // It sets the default values for the state properties when the Redux store is first created
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    // The payload is the data that is being sent along with the action.
    incrementByValue: (state, actions) => {
      state.count += actions.payload;
    },
  },
});
export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
