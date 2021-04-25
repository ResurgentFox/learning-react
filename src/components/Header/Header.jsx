import * as React from "react";
import styles from "./Header.module.css";
import logo from "./logo/logo.png";

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
    <img className={styles.logo} alt={"logo"} src={logo}></img>
    </div>
  </header>
);
