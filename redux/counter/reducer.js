import counterTypes from "./types";

const INITIAL = {
  count: 0,
};

export const countReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case counterTypes.COUNT_INCREMENT:
      return { ...state, count: state.count + 1 };

    default:
      return state;
  }
};
