import Head from "next/head";
import styles from "../styles/Home.module.css";
import Timer from "../components/Timer/Timer";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ticktivity | pomodoro timer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Ticktivity</h1>

        <p className={styles.description}>Make sure every tick contributes</p>
        <Timer />
        <div>
          <Button>Start</Button>
          <Button>Stop</Button>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href="/about">About us</a>
      </footer>
    </div>
  );
}
