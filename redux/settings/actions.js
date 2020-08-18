import settingsTypes from "./types";

export const settingsToggle = () => {
  return {
    type: settingsTypes.TOGGLE_CONFIG,
  };
};
