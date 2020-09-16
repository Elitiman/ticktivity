import { settingsReducer } from "./settings/reducer";
import tableDataReducer from "./table-data/reducer";

const { combineReducers } = require("redux");
const { loginReducer } = require("./login/reducer");

const reducers = {
  loginReducer,
  settingsReducer,
  tableDataReducer,
};

export default combineReducers(reducers);
