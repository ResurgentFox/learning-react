import * as React from "react";
import styles from "./MsgSendForm.module.css";
import emoji from "./emojiMessage/lovely.png";

export const MsgSendForm = () => {
  const newMessageRef = React.createRef();
  const sendMessage = () => {
    const message = newMessageRef.current.value;
    alert(message);
  };

  return (
    <div className={styles.sendMessage}>
      <div className={styles.post}>
        <div className={styles.avatar}></div>
        <textarea
          ref={newMessageRef}
          method="POST"
          cols="40"
          rows="1"
          className={styles.text}
        />
        <button onClick={sendMessage} className={styles.button}>
          SEND
        </button>
      </div>

      <div className={styles.flex}>
        <img className={styles.emoji} alt={"emoji"} src={emoji}></img>
      </div>
    </div>
  );
};
