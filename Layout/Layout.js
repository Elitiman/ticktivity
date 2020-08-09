import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Layout.module.scss";
import Login from "../components/Login/Login";
import { connect } from "react-redux";

const Layout = ({ children, popup, ...otherProps }) => {
  return (
    <React.Fragment {...otherProps}>
      <Header />
      <main className={styles.main}>
        {children}
        {popup ? <Login /> : null}
      </main>
      <Footer />
    </React.Fragment>
  );
};
const mapStateToProps = ({ loginReducer: { popup } }) => ({
  popup,
});
export default connect(mapStateToProps)(Layout);
