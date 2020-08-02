import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, ...otherprops }) => {
  return (
    <button className={styles.btn} {...otherprops}>
      {children}
    </button>
  );
};

export default Button;
