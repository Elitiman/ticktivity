import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Layout.module.scss";
import Login from "../components/Login/Login";
import { connect } from "react-redux";
import Config from "../components/Config/Config";

const Layout = ({ children, settingsPopup, loginPopup }) => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        {children}
        {loginPopup ? <Login /> : settingsPopup ? <Config /> : null}
      </main>
      <Footer />
    </div>
  );
};
const mapStateToProps = ({
  loginReducer: { popup: loginPopup },
  settingsReducer: { popup: settingsPopup },
}) => ({
  loginPopup,
  settingsPopup,
});
export default connect(mapStateToProps)(Layout);
