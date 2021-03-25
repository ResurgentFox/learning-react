import * as React from "react";
import styles from "./Profile.module.css";

export const Profile = () => (
  <div className={styles.content}>
    <div>ava+description</div>
    <div className={styles.post}>
      My posts
      <div>New post</div>
      <div>
        <div className={`${styles.post} ${styles.active}`}>post1</div>
        <div>post2</div>
      </div>
    </div>
  </div>
);
