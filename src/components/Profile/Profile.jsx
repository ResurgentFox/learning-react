import * as React from "react";
import styles from "./Profile.module.css";
import { Post } from "./Posts/Post";

export const Profile = () => (
  <div className={styles.content}>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
);
