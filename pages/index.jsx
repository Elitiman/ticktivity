import Head from "next/head";
import styles from "../styles/Home.module.css";
import Timer from "../components/Timer/Timer";
import Button from "../components/Button/Button";
import Login from "../components/Login/Login";
import { connect } from "react-redux";
import Layout from "../Layout/Layout";
import { incrementCount } from "../redux/counter/actions";

function Home({ popup, incrementCount, count }) {
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
          <h1 className={styles.title}>Welcome to Ticktivity</h1>

          <p className={styles.description}>Make sure every tick contributes</p>
          <Timer />
          <div>
            <Button>Start</Button>
            <Button>Stop</Button>
            <Button onClick={incrementCount}>Increment</Button>
          </div>
          <h3>{count}</h3>
        </main>
        {popup ? <Login /> : null}
      </div>
    </Layout>
  );
}
const mapStateToProps = ({
  loginReducer: { popup },
  countReducer: { count },
}) => ({
  popup,
  count,
});

const mapDispatchToProps = (dispatch) => ({
  incrementCount: () => dispatch(incrementCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
