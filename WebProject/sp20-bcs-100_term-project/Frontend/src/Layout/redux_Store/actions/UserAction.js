import React from "react";
import axios from "axios";

export const UserAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

    const { data } = await axios.post(
      "/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "loginSucess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loginFailure",
      payload: error,
    });
  }
};

export const UserLoad = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const { data } = await axios.get("/me");

    dispatch({
      type: "loadUserSucess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      payload: error,
    });
  }
};

export const UserLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });

    const { data } = await axios.get("/logout");

    dispatch({
      type: "logoutSucess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "logoutFailure",
      payload: error,
    });
  }
};
