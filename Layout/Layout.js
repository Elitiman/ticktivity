import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Layout.module.scss";
import Login from "../components/Login/Login";
import { connect } from "react-redux";

const Layout = ({ children, popup }) => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        {children}
        {popup ? <Login /> : null}
      </main>
      <Footer />
    </div>
  );
};
const mapStateToProps = ({ loginReducer: { popup } }) => ({
  popup,
});
export default connect(mapStateToProps)(Layout);
