import * as React from "react";
import styles from "./Posts.module.css";
import emoji from "./emoji/emoji.png";
import { Post } from "./Post/Post";

export const Posts = () => {
  const postsData = [
    { id: 1, reply: "Reply", message: "Hey there! What`s up?", likesCount: 15 },
    {
      id: 2,
      reply: "Reply",
      message: "This is my first props:3",
      likesCount: 42,
    },
  ];

  const postsElements = postsData.map((posts) => (
    <Post
      id={posts.id}
      reply={posts.reply}
      message={posts.message}
      likesCount={posts.likesCount}
    />
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>What`s new?</div>
        <div className={styles.post}>
          <div className={styles.avatar}></div>
          <textarea
            method={"POST"}
            cols={40}
            rows={1}
            className={styles.text}
          />
          <button className={styles.button}>POST</button>
        </div>
      </div>

      <div className={styles.flex}>
        <img className={styles.emoji} alt={"emoji"} src={emoji}></img>
      </div>

      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};
