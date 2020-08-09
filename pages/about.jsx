import React from "react";
import Layout from "../Layout/Layout";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>About us</h1>
        <p className={styles.description}>
          We are a team of developers at elitiman
        </p>
      </main>
    </Layout>
  );
};

export default About;
