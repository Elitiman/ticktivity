import React from "react";
import styles from "./Timer.module.scss";
import Button from "../Button/Button";
const Timer = () => {
  return (
    <React.Fragment>
      <div className={styles.timerCont}>
        <h2 className={styles.timerText}>00:25:00</h2>
      </div>
      <div>
        <Button>Start</Button>
        <Button>Stop</Button>
      </div>
    </React.Fragment>
  );
};

export default Timer;
