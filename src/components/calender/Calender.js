import React from "react";
import styles from "./calender.module.css";
import { DOB } from "../../database/DOB";
function Calender() {
  return (
    <div className={styles["container"]}>
      <div className={styles["row"]}>
        <p>Occassion</p>
        <p>Date</p>
      </div>
      {DOB.map((occ) => (
        <li className={styles["row"]}>
          <p>{occ.occassion}</p>
          <p>{occ.date}</p>
        </li>
      ))}
      <div></div>
    </div>
  );
}

export default Calender;
