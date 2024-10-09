// components/Layout.js
import Link from "next/link";
import styles from "./Layout.module.css"; // Adjust the path if needed

export default function Layout({ children }) {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
            <Link href="/Aboutus">About Us</Link>
            <Link href="/Services">Services</Link>
            <Link href="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}
