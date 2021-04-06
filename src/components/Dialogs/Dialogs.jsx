import * as React from "react";
import styles from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

export const Dialogs = (props) => {
  const dialogsData = [
    { id: 1, name: "Pasha" },
    { id: 2, name: "John" },
    { id: 3, name: "Mark" },
    { id: 4, name: "Alex" },
    { id: 5, name: "Robert" },
    { id: 6, name: "Sasha" },
  ];

  const messageData = [
    { id: 1, message: "Hey, Pasha, what`s up?" },
    { id: 2, message: "Hi, Anny! I`m okay, how about u?" },
    { id: 3, message: "I`m good, just start learning JavaScript:3" },
    { id: 4, message: "Wow it`s so cool! I could help you with it!" },
    { id: 5, message: "Yea, thanks:3 It will be great!" },
  ];

  const dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  const messagesElements = messageData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  return (
    <div className={styles.contacts}>
      <div className={styles.dialogs}>{dialogsElements}</div>

      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};
