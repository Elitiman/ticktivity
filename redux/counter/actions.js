import counterTypes from "./types";

export const incrementCount = () => {
  return {
    type: counterTypes.COUNT_INCREMENT,
  };
};
