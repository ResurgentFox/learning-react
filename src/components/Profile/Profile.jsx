import * as React from "react";
import styles from "./Profile.module.css";
import { Posts } from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => (
  <div className={styles.content}>
    <ProfileInfo />
    <Posts posts={props.posts}/>
  </div>
);
