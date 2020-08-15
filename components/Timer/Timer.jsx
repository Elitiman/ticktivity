import React, { useState } from "react";
import styles from "./Timer.module.scss";
import Button from "../Button/Button";
const Timer = () => {
  const [timer, setTimer] = useState({
    minutes: "00",
    seconds: "10",
    running: false,
    timerId: 0,
  });

  const triggerTimer = () => {
    if (timer.running) {
      setTimer((prev) => ({ ...prev, running: false }));
      clearInterval(timer.timerId);
    } else {
      setTimer((prev) => ({ ...prev, running: true }));
      /* var countDownDate = new Date();
      countDownDate.setMinutes(
        countDownDate.getMinutes() + parseInt(timer.minutes)
      ); */

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
  return (
    <React.Fragment>
      <div className={styles.timerCont}>
        <h2
          className={styles.timerText}
        >{`${timer.minutes}:${timer.seconds}`}</h2>
      </div>
      <div>
        <Button onClick={triggerTimer}>Start</Button>
        <Button>Stop</Button>
      </div>
    </React.Fragment>
  );
};

export default Timer;
