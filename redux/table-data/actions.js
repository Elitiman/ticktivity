import { TableDataType } from "./types";

export const addContenToTable = (data) => ({
  type: TableDataType.ADD_CONTENT,
  payload: data,
});
