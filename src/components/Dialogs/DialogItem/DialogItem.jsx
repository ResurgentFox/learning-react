import * as React from "react";
import styles from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

export const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={styles.name + " " + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
