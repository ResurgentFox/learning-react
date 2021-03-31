import * as React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export const Dialogs = (props) => (
  <div className={styles.contacts}>
    <div className={styles.dialogs}>
      <div className={styles.name + " " + styles.active}>
        <NavLink to="/dialogs/1">Pasha</NavLink>
      </div>
      <div className={styles.name}>
        <NavLink to="/dialogs/2">John</NavLink>
      </div>
      <div className={styles.name}>
        <NavLink to="/dialogs/3">Mark</NavLink>
      </div>
      <div className={styles.name}>
        <NavLink to="/dialogs/4">Alex</NavLink>
      </div>
      <div className={styles.name}>
        <NavLink to="/dialogs/5">Robert</NavLink>
      </div>
      <div className={styles.name}>
        <NavLink to="/dialogs/6">Sasha</NavLink>
      </div>
    </div>

    <div className={styles.messages}>
      <div className={styles.message}>Hey, Pasha, what`s up?</div>
      <div className={styles.message}>Hi, Anny! I`m okay, how about u?</div>
      <div className={styles.message}>
        I`m good, just start learning JavaScript:3
      </div>
      <div className={styles.message}>
        Wow it`s so cool! I could help you with it!
      </div>
      <div className={styles.message}>Yea, thanks:3 It will be great!</div>
    </div>
  </div>
);
