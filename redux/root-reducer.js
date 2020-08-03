const { combineReducers } = require("redux");
const { loginReducer } = require("./login/reducer");

export const reducer = combineReducers(loginReducer);
