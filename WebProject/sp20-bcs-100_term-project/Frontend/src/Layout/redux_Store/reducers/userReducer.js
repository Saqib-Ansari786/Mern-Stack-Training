import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const userReducer = createReducer(initialState, {
  // Login Reducers
  loginRequest: (state) => {
    state.loading = true;
  },
  loginSucess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  loginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  // Logout Reducers

  logoutRequest: (state) => {
    state.loading = true;
  },
  logoutSucess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = false;
  },
  logoutFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },

  // Register Reducers

  registerRequest: (state) => {
    state.loading = true;
  },
  registerSucess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  registerFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  // Update Reducers

  updateRequest: (state) => {
    state.loading = true;
  },
  updateSucess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  updateFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  // Load Reducers

  loadUserRequest: (state) => {
    state.loading = true;
  },
  loadUserSucess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  loadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
});

export default userReducer;
