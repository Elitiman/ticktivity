import React from "react";
import styles from "./Login.module.scss";
import CloseIcon from "../../assets/close.svg";
import Button from "../Button/Button";

const Login = () => {
  const btn = {
    borderRadius: "50%",
    position: "absolute",
    right: 0,
    top: 0,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Login in with Social Network</h2>
        <Button style={btn}>
          <CloseIcon />
        </Button>
        <div>
          <p>Facebook</p>
        </div>
        <div>
          <p>Twitter</p>
        </div>
        <div>
          <p>Google</p>
        </div>
        <div>
          <p>Github</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
