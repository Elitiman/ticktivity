import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children, ...otherProps }) => {
  return (
    <React.Fragment {...otherProps}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
