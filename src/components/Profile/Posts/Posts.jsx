import * as React from "react";
import styles from "./Posts.module.css";
import emoji from "./emoji/emoji.png";
import { Post } from "./Post/Post";

export const Posts = () => (
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
      {/* <div className={styles.like}>Like</div> */}
      <img className={styles.emoji} alt={"emoji"} src={emoji}></img>
    </div>

    <div className={styles.posts}>
      <Post reply="Reply" likes="15" message="Hey there! What`s up?" />
      <Post reply="Reply" likes="42" message="This is my first props:3" />
    </div>
  </div>
);