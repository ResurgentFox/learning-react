import * as React from "react";
import styles from "./ProfileInfo.module.css";
import mountain from "./UserWallpaper/mountain.jpg";
import user from "./UserPhoto/Ann.jpg";

export const ProfileInfo = () => (
  <div className={styles.userInfo}>
    <div className={styles.userWallpaper}>
      <img
        src={mountain}
        alt={"mountain"}
        className={styles.moutainWallpaper}
      />
        </div>
        
      <img src={user} alt={"userAnnPhoto"} className={styles.userAnnPhoto} />
      <div className={styles.userDescription}>Some user description</div>
    
  </div>
);
