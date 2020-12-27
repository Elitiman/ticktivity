import styles from "./Table.module.scss";

import {
  FiPlusCircle as PlusIcon,
  FiMoreHorizontal as MoreIcon,
} from "react-icons/fi";
import { addContenToTable } from "../../redux/table-data/actions";
import { connect } from "react-redux";

const TableRowInput = ({ addContenToTable, contents }) => {
  const category = React.createRef();
  const description = React.createRef();
  const getDataTime = () => {
    let tempTime;
    console.log("contents", contents);
    const length = contents.length;
    if (length > 0) {
      // var d = new Date();
      // d.setMinutes(d.getMinutes() - 90);
      tempTime = contents[length - 1].time.getMinutes() + 25;
    } else {
      tempTime = new Date();
    }
    return tempTime;
  };

  return (
    <div className={styles["row-container"]}>
      <div className={styles.category}>
        <input
          type="text"
          name="category"
          placeholder="Category"
          id="inp-category"
          ref={category}
          className={styles.input}
          autoComplete="off"
          // onChange={handleChange}
          onKeyUp={(e) => {
            if (e.key == "Enter") {
              const dataTime = getDataTime();
              addContenToTable({
                category: category.current.value,
                description: description.current.value,
                time: dataTime,
              });
              category.current.value = "";
              description.current.value = "";
            }
          }}
        />
      </div>
      <div className={styles.description}>
        <input
          type="text"
          name="description"
          placeholder="Short Description"
          id="inp-desc"
          ref={description}
          required
          autoComplete="off"
          className={styles.input}
          onKeyUp={(e) => {
            if (e.key == "Enter") {
              const dataTime = getDataTime();
              addContenToTable({
                category: category.current.value,
                description: description.current.value,
                time: dataTime,
              });
              category.current.value = "";
              description.current.value = "";
            }
          }}
        />
      </div>
      <div className={styles.time}></div>
      <div className={styles.count}>
        <PlusIcon
          onClick={() => {
            const dataTime = getDataTime();
            if (description.current.value) {
              addContenToTable({
                category: category.current.value,
                description: description.current.value,
                time: dataTime,
              });
            } else {
              alert("Please enter a Description");
              return;
            }
            category.current.value = "";
            description.current.value = "";
          }}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

const TableRow = ({ data }) => {
  return (
    <div className={styles["row-container"]}>
      <div className={styles.category}>
        <p>{data.category}</p>
      </div>
      <div className={styles.description}>
        <p>{data.description}</p>
      </div>
      <div className={styles.time}>
        <p>{data.time.toLocaleString()}</p>
      </div>
      <div className={styles.count}>
        <PlusIcon className={styles.icon} />
      </div>
      <div className={styles.submenu}>
        <MoreIcon className={styles.icon} />
      </div>
    </div>
  );
};

const Table = ({ addContenToTable, contents }) => {
  return (
    <div className={styles.table}>
      <TableRowInput addContenToTable={addContenToTable} contents={contents} />
      {contents.map((data, i) => (
        <TableRow key={i} data={data} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  contents: state.tableDataReducer.contents,
});

const mapDispatchToProps = (dispatch) => ({
  addContenToTable: (data) => dispatch(addContenToTable(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
