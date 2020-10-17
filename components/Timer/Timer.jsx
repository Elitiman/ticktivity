import { useState } from "react";
import styles from "./Timer.module.scss";
import Button from "../Button/Button";
import { connect } from "react-redux";
const Timer = ({ contents }) => {
  const [timer, setTimer] = useState({
    minutes: "25",
    seconds: "00",
    running: false,
    timerId: 0,
  });

  const triggerTimer = () => {
    if (timer.running) {
      setTimer((prev) => ({ ...prev, running: false }));
      clearInterval(timer.timerId);
    } else {
      setTimer((prev) => ({ ...prev, running: true }));

      var countDown = parseInt(timer.minutes) * 60 + parseInt(timer.seconds);
      let timerInterval = setInterval(() => {
        countDown--;
        let mins = Math.floor(countDown / 60);
        let secs = Math.floor(countDown % 60);
        setTimer((prev) => ({
          ...prev,
          minutes: mins,
          seconds: secs.toString(),
        }));
        if (countDown < 0) {
          clearInterval(timer.timerId);
          setTimer((prev) => ({
            ...prev,
            minutes: "25",
            seconds: "00",
            running: false,
          }));
        }
      }, 1000);
      setTimer((prev) => ({ ...prev, timerId: timerInterval }));
    }
  };

  const stopTimer = () => {
    clearInterval(timer.timerId);
    setTimer((prev) => ({
      ...prev,
      minutes: "25",
      seconds: "00",
      running: false,
      timerId: 0,
    }));
  };
  return (
    <React.Fragment>
      <div className={styles.timerCont}>
        <h2
          className={styles.timerText}
        >{`${timer.minutes}:${timer.seconds}`}</h2>
        {contents.length > 0 && (
          <p className={styles.desc}>{contents[0].description}</p>
        )}
      </div>
      <div>
        <Button onClick={triggerTimer}>Start</Button>
        <Button onClick={stopTimer}>Stop</Button>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  contents: state.tableDataReducer.contents,
});

export default connect(mapStateToProps)(Timer);
