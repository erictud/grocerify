//? import actions
import {
  TOGGLE_NAV,
  CLEAR_ALERT,
  SHOW_ALERT,
  LOGIN_USER_ERROR,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  CREATE_USER_ERROR,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
} from "./actions.js";

export const reducer = (state, action) => {
  if (action.type === TOGGLE_NAV) {
    return { ...state, showNav: !state.showNav };
  }

  // ALERT actions
  if (action.type === SHOW_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: action.payload.alertType,
      alertText: action.payload.alertText,
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  // LOGIN actions
  if (action.type === LOGIN_USER_START) {
    return { ...state, isLoading: true };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      alertType: "success",
      alertText: "Success! Logging in",
      showAlert: true,
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return { ...state, showAlert: true, alertType: "error", alertText: action.payload.alertText };
  }

  // CREATE USER actions
  if (action.type === CREATE_USER_START) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      alertType: "success",
      alertText: "Success! Signing in",
      showAlert: true,
    };
  }

  if (action.type === CREATE_USER_ERROR) {
    return { ...state, showAlert: true, alertType: "error", alertText: action.payload.alertText };
  }
};
