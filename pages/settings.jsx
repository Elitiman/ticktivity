import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../Layout/Layout";
import Config from "../components/Config/Config";

function Home() {
  return (
    <Layout>
      <Head>
        <title>Ticktivity | Configuration</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Config />
    </Layout>
  );
}

export default Home;
