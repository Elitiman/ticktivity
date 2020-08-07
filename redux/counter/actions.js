import counterTypes from "./types";

export const incrementCount = () => {
  alert("incremented");
  return {
    type: counterTypes.COUNT_INCREMENT,
  };
};
