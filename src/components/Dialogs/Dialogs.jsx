import * as React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.name + " " + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
};

export const Message = (props) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
};

export const Dialogs = (props) => (
  <div className={styles.contacts}>
    <div className={styles.dialogs}>
      <DialogItem name="Pasha" id="1" />
      <DialogItem name="John" id="2" />
      <DialogItem name="Mark" id="3" />
      <DialogItem name="Alex" id="4" />
      <DialogItem name="Robert" id="5" />
      <DialogItem name="Sasha" id="6" />
    </div>

    <div className={styles.messages}>
      <Message message="Hey, Pasha, what`s up?" />
      <Message message="Hi, Anny! I`m okay, how about u?" />
      <Message message="I`m good, just start learning JavaScript:3" />
      <Message message="Wow it`s so cool! I could help you with it!" />
      <Message message="Yea, thanks:3 It will be great!" />
    </div>
  </div>
);
