const INITIAL_STATE = {
  minutes: "25",
  seconds: "00",
  running: false,
  timerId: 0,
};

const timerReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default timerReducer;
