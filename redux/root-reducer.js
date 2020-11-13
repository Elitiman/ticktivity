import { settingsReducer } from "./settings/reducer";
import tableDataReducer from "./table-data/reducer";
import timerReducer from "./timer/reducer";

const { combineReducers } = require("redux");
const { loginReducer } = require("./login/reducer");

const reducers = {
  loginReducer,
  settingsReducer,
  tableDataReducer,
  timerReducer,
};

export default combineReducers(reducers);
