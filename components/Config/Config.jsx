import styles from "./Config.module.scss";

const Config = () => {
  const duration = React.createRef();
  const breakTime = React.createRef();
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
