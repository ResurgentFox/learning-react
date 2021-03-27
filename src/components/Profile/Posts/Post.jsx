import * as React from "react";
import styles from "./Post.module.css";

export const Post = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.title}>What`s new?</div>
      <div className={styles.post}>
        <div className={styles.avatar}></div>
        <textarea method={"POST"} cols={40} rows={1} className={styles.text} />
        <button className={styles.button}>POST</button>
      </div>
    </div>
    <div className={styles.flex}>
      <div className={styles.like}>Like</div>
    </div>
  </div>
);
