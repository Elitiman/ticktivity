import styles from "./Config.module.scss";
import { createRef } from "react";

const Config = () => {
  const duration = createRef();
  const breakTime = createRef();
  return (
    <div children={styles.wrapper}>
      <div className={styles.container}>
        <label htmlFor="">Pomodoro Duration:</label>
        <input placeholder="minutes" type="number" ref={duration} />
        <label htmlFor="">Break Duration:</label>
        <input placeholder="minutes" type="number" ref={breakTime} />
        <button className={styles.btn}>Save</button>
      </div>
    </div>
  );
};

export default Config;
