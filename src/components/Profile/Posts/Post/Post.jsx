import * as React from "react";
import styles from "./Post.module.css";

export const Post = (props) => (
  <div className={styles.message}>
    <div className={styles.container}>
      <div className={styles.ava}></div>
      {props.message}
    </div>

    <div className={styles.flex}>
      {props.likes}
      <div className={styles.like}>Likes</div>
      <div className={styles.reply}>{props.reply}</div>
    </div>
  </div>
);
