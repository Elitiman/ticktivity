import Head from "next/head";
import styles from "../styles/Home.module.css";
import Timer from "../components/Timer/Timer";
import Layout from "../Layout/Layout";
import Table from "../components/Table/Table";
import { mainContent } from "./enum";

function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Ticktivity | pomodoro timer</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>{mainContent.TITLE}</h1>
          <p className={styles.description}>{mainContent.SLOGAN}</p>
          <Timer />
          <Table />
        </main>
      </div>
    </Layout>
  );
}

export default Home;
