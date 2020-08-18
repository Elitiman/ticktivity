import { settingsReducer } from "./settings/reducer";

const { combineReducers } = require("redux");
const { loginReducer } = require("./login/reducer");

const reducers = {
  loginReducer,
  settingsReducer,
};

export default combineReducers(reducers);
