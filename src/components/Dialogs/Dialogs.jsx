import * as React from "react";
import styles from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

export const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = props.messages.map((item) => (
    <Message message={item.message} id={item.id} />
  ));

  return (
    <div className={styles.contacts}>
      <div className={styles.dialogs}>{dialogsElements}</div>

      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};
