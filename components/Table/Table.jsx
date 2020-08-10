import React from "react";
import styles from "./Table.module.scss";

const Table = () => {
  return (
    <div>
      <div className={styles["row-container"]}>
        <div className={styles.category}>
          <p>Personal</p>
        </div>
        <div className={styles.description}>
          <p>Learn next.js by the end of August</p>
        </div>
        <div className={styles.time}>
          <p>09:45pm</p>
        </div>
        <div className={styles.count}>
          <p>1</p>
        </div>
        <div className={styles.submenu}>...</div>
      </div>
    </div>
  );
};

export default Table;
