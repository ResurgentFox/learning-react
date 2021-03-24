import * as React from "react";
import forest from "../content/forest.jpg";
import styles from "./Profile.module.css";

export const Profile = () => (
  <div className={styles.content}>
    <div>
      <img src={forest} alt={"forest"} />
    </div>
    <div>ava+description</div>
    <div>
      My posts
      <div>New post</div>
      <div>
        <div>post1</div>
        <div>post2</div>
      </div>
    </div>
  </div>
);
