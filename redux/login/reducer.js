import { loginTypes } from "./types";

export const INITIAL_STATE = {
  popup: false,
  loggedIn: false,
};

export function loginReducer(preloadedState = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case loginTypes.LOGIN_POPUP_TOGGLE:
      return { ...preloadedState, popup: !preloadedState.popup };

    default:
      return preloadedState;
  }
}
