import React, { useContext, useReducer } from "react";

import { reducer } from "./reducer";

//? import actions
import {
  TOGGLE_NAV,
  SHOW_ALERT,
  CLEAR_ALERT,
  LOGIN_USER_ERROR,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  CREATE_USER_ERROR,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
} from "./actions.js";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  showNav: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleNav = () => {
    dispatch({ type: TOGGLE_NAV });
  };

  // ALERT
  const displayAlert = ({ alertType, alertText }) => {
    dispatch({ type: SHOW_ALERT, payload: { alertType, alertText } });
    clearAlert();
  };

  const clearAlert = () => {
    const timeout = setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
      return () => {
        clearTimeout(timeout);
      };
    }, 1500);
  };

  // AUTH
  const logIn = async ({ email, password }) => {
    // loading
    dispatch({ type: LOGIN_USER_START });
    // req
    // success msg
    dispatch({ type: LOGIN_USER_SUCCESS });
    clearAlert();
  };

  const signUp = async ({ email, password, username }) => {
    // loading
    dispatch({ type: CREATE_USER_START });
    // req
    // success msg
    dispatch({ type: CREATE_USER_SUCCESS });
    clearAlert();
  };

  return (
    <AppContext.Provider value={{ ...state, toggleNav, displayAlert, clearAlert, logIn, signUp }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider };
