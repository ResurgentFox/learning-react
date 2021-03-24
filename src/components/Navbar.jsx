import * as React from "react";
import styles from './Navbar.module.css';


export const Navbar = () => (
    <nav className={styles.nav}>
    <div>
      <a href="key">Profile</a>
    </div>
    <div>
      <a href="key">Friends</a>
    </div>
    <div>
      <a href="key">Messages</a>
    </div>
    <div>
      <a href="key">News</a>
    </div>
    <div>
      <a href="key">Settings</a>
    </div>
  </nav>
);