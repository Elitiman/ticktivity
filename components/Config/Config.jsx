import React from "react";
import styles from "./Config.module.scss";

const Config = () => {
  return (
    <div children={styles.wrapper}>
      <div className={styles.container}>
        <label htmlFor="">Pomodoro Duration:</label>
        <input type="number" />
        <label htmlFor="">Break Duration:</label>
        <input type="number" />
      </div>
    </div>
  );
};

export default Config;
