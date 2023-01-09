import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const customReducer = createReducer(initialState, {
  // Add your reducers here
  increment: (state) => {
    state.value += 1;
  },
  decrement: (state) => {
    state.value -= 1;
  },
  incrementByAmount: (state, action) => {
    state.value += action.payload;
  },
});

export default customReducer;
