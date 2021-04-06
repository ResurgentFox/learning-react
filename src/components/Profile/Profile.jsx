import * as React from "react";
import styles from "./Profile.module.css";
import { Posts } from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => (
  <div className={styles.content}>
    <ProfileInfo />
    <Posts />
  </div>
);
