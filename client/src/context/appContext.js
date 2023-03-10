import React, { useContext, useReducer } from "react";

import { reducer } from "./reducer";

//? import actions
import { TOGGLE_NAV } from "./actions.js";

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

  return <AppContext.Provider value={{ ...state, toggleNav }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider };
