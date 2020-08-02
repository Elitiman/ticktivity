import React from "react";
import styles from "./Timer.module.scss";

const Timer = () => {
  return (
    <div className={styles.timerCont}>
      <h2 className={styles.timerText}>00:00:00</h2>
    </div>
  );
};

export default Timer;
