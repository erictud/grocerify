//? import actions
import { TOGGLE_NAV } from "./actions.js";

export const reducer = (state, action) => {
  if (action.type === TOGGLE_NAV) {
    return { ...state, showNav: !state.showNav };
  }
};
