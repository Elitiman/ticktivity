import React from "react";
import styles from "./Table.module.scss";
import PlusIcon from "../../assets/plus.svg";
import MoreIcon from "../../assets/more.svg";

const TableRowInput = () => (
  <div className={styles["row-container"]}>
    <div className={styles.category}>
      <input
        type="text"
        name="category"
        placeholder="Category"
        id="inp-category"
      />
    </div>
    <div className={styles.description}>
      <input
        type="text"
        name="description"
        placeholder="Short Description"
        id="inp-desc"
      />
    </div>
    <div className={styles.time}></div>
    <div className={styles.count}>
      <div className={styles.circle}>
        <p>
          <PlusIcon />
        </p>
      </div>
    </div>
  </div>
);

const TableRow = () => (
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
      <div className={styles.circle}>
        <p>
          {" "}
          <PlusIcon />
        </p>
      </div>
    </div>
    <div className={styles.submenu}>
      <MoreIcon />
    </div>
  </div>
);

const Table = () => {
  return (
    <div className={styles.table}>
      <TableRowInput />
      <TableRow />
    </div>
  );
};

export default Table;
