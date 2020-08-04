const { combineReducers } = require("redux");
const { loginReducer } = require("./login/reducer");

const reducers = {
  loginReducer,
};

export default combineReducers(reducers);
