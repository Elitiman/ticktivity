import styles from "./Footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/about">
        <a>About us</a>
      </Link>
    </footer>
  );
};

export default Footer;
