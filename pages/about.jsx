import React from "react";
import Layout from "../Layout/Layout";
import styles from "../styles/Home.module.css";
import { connect } from "react-redux";

const About = ({ count }) => {
  return (
    <Layout>
      {" "}
      <main className={styles.main}>
        <h1 className={styles.title}>About us</h1>
        <p>Displaying data from home:{count}</p>
        <p className={styles.description}>
          We are a team of developers at elitiman
        </p>
      </main>
    </Layout>
  );
};
const mapStateToProps = ({ countReducer: { count } }) => ({ count });

export default connect(mapStateToProps)(About);
