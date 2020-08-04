import React from "react";
// import Link from "next/link";
import styles from "./Header.module.scss";
import { connect } from "react-redux";
import { loginToggle } from "../../redux/login/actions";

const Header = ({ loginToggle }) => {
  return (
    <header className={styles.header}>
      <nav>
        <a href="/">Home</a>
        <span className={styles["nav-right"]}>
          <a onClick={() => loginToggle()}>Login</a>
          <a href="/about">About</a>
        </span>
      </nav>
    </header>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loginToggle: () => dispatch(loginToggle()),
});

export default connect(null, mapDispatchToProps)(Header);
