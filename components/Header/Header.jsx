import React from "react";
// import Link from "next/link";
import styles from "./Header.module.scss";
import { connect } from "react-redux";
import { loginToggle } from "../../redux/login/actions";
import { settingsToggle } from "../../redux/settings/actions";

const Header = ({ loginToggle, settingsToggle }) => {
  return (
    <header className={styles.header}>
      <nav>
        <a href="/">Home</a>
        <span className={styles["nav-right"]}>
          <a onClick={() => loginToggle()}>Login</a>
          <a href="/about">About</a>
          <a onClick={() => settingsToggle()}>Settings</a>
        </span>
      </nav>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginToggle: () => dispatch(loginToggle()),
  settingsToggle: () => dispatch(settingsToggle()),
});

export default connect(null, mapDispatchToProps)(Header);
