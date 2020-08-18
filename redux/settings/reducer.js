import settingsTypes from "./types";

const INITIAL = {
  popup: false,
};

export const settingsReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case settingsTypes.TOGGLE_CONFIG:
      return { ...state, popup: !state.popup };

    default:
      return state;
  }
};
