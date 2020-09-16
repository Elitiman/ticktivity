import { TableDataType } from "./types";

const INITIAL_STATE = {
  contents: [],
};

export default function tableDataReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case TableDataType.ADD_CONTENT:
      return { ...state, contents: [payload, ...state.contents] };

    default:
      return state;
  }
}
