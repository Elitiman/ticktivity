import React from "react";
import styles from "./Login.module.scss";
import CloseIcon from "../../assets/close.svg";
import { connect } from "react-redux";
import { loginToggle } from "../../redux/login/actions";
import FacebookLogo from "../../assets/fb-logo.svg";
import GithubLogo from "../../assets/github-logo.svg";
import TwitterLogo from "../../assets/twitter-logo.svg";
import GoogleLogo from "../../assets/google-logo.svg";

const Login = ({ loginToggle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Register or Login</h2>
        <p className={styles.para}>
          Create or log in using your existing social media account
        </p>
        <button className={styles.btn} onClick={() => loginToggle()}>
          <CloseIcon fill={"#fff"} />
        </button>
        <div className={`${styles["social-container"]} ${styles.facebook}`}>
          <FacebookLogo fill={"#fff"} />
          <p>Facebook</p>
        </div>
        <div className={`${styles["social-container"]} ${styles.twitter}`}>
          <TwitterLogo fill={"#fff"} />
          <p>Twitter</p>
        </div>
        <div className={`${styles["social-container"]} ${styles.google}`}>
          <GoogleLogo fill={"#fff"} />
          <p>Google</p>
        </div>
        <div className={`${styles["social-container"]} ${styles.github}`}>
          <GithubLogo fill={"#fff"} />
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
