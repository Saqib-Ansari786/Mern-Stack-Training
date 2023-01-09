import { configureStore } from "@reduxjs/toolkit";
import customReducer from "./reducers";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
