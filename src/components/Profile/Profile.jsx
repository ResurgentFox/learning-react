import * as React from "react";
import styles from "./Profile.module.css";
import { Posts } from "./Posts/Posts";

export const Profile = () => (
  <div className={styles.content}>
    <Posts />
  </div>
);
