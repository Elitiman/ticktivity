import React, { useState } from "react";
import styles from "./Timer.module.scss";
import Button from "../Button/Button";
const Timer = () => {
  const [timer, setTimer] = useState({
    minutes: "25",
    seconds: "00",
    running: false,
  });
  var timerInterval;
  const triggerTimer = () => {
    if (timer.running) {
      clearInterval(timerInterval);
      setTimer((prev) => ({ ...prev, running: false }));
    } else {
      var countDownDate = new Date();
      countDownDate.setMinutes(
        countDownDate.getMinutes() + parseInt(timer.minutes)
      );

      let countDownTime = countDownDate.getTime();
      console.log("countDownTime : ", countDownTime);
      timerInterval = setInterval(() => {
        var now = new Date().getTime();

        let distance = countDownTime - now;
        let mins = Math.floor(distance / (1000 * 60));
        let secs = Math.floor((distance % (1000 * 60)) / 1000);
        setTimer((prev) => ({
          ...prev,
          minutes: mins,
          seconds: secs.toString(),
        }));
        if (distance < 0) {
          clearInterval(timerInterval);
          setTimer((prev) => ({
            ...prev,
            minutes: "25",
            seconds: "00",
            running: false,
          }));
        }
      }, 1000);
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
