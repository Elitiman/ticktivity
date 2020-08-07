import { countReducer } from "./counter/reducer";

const { combineReducers } = require("redux");
const { loginReducer } = require("./login/reducer");

const reducers = {
  loginReducer,
  countReducer,
};

export default combineReducers(reducers);
