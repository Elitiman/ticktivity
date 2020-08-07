import React from "react";
import styles from "./Login.module.scss";
import CloseIcon from "../../assets/close.svg";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { loginToggle } from "../../redux/login/actions";

const Login = ({ loginToggle }) => {
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
        <Button style={btn} onClick={() => loginToggle()}>
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
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loginToggle: () => dispatch(loginToggle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
