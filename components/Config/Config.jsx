import styles from "./Config.module.scss";
import { createRef } from "react";

const Config = () => {
  const duration = createRef();
  const breakTime = createRef();
  return (
    <div children={styles.wrapper}>
      <div className={styles.container}>
        <label htmlFor="">Pomodoro Duration:</label>
        <input type="number" ref={duration} />
        <span>in minutes</span>
        <label htmlFor="">Break Duration:</label>
        <input type="number" ref={breakTime} />
        <span>in minutes</span>
      </div>
    </div>
  );
};

export default Config;
