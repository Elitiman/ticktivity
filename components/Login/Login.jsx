import React from "react";
import styles from "./Login.module.scss";
import CloseIcon from "../../assets/close.svg";
import { connect } from "react-redux";
import { loginToggle } from "../../redux/login/actions";

const Login = ({ loginToggle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Login in with Social Network</h2>
        <button className={styles.btn} onClick={() => loginToggle()}>
          <CloseIcon fill={"#fff"} />
        </button>
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
const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
  loginToggle: () => dispatch(loginToggle()),
  incrementCount: () => dispatch(incrementCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
