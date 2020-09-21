import Link from "next/link";
import styles from "./Header.module.scss";
import { connect } from "react-redux";
import { loginToggle } from "../../redux/login/actions";
import { settingsToggle } from "../../redux/settings/actions";

const Header = ({ loginToggle, settingsToggle }) => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <span className={styles["nav-right"]}>
          <a onClick={() => loginToggle()}>Login</a>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/settings">
            <a>Settings</a>
          </Link>
        </span>
      </nav>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginToggle: () => dispatch(loginToggle()),
  settingsToggle: () => dispatch(settingsToggle()),
});

export default connect(null, mapDispatchToProps)(Header);
