import styles from "./Table.module.scss";

import {
  FiPlusCircle as PlusIcon,
  FiMoreHorizontal as MoreIcon,
} from "react-icons/fi";
import { addContenToTable } from "../../redux/table-data/actions";
import { connect } from "react-redux";

const TableRowInput = ({ addContenToTable }) => {
  const category = React.createRef();
  const description = React.createRef();

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
          // onChange={handleChange}
          onKeyUp={(e) => {
            if (e.key == "Enter") {
              addContenToTable({
                category: category.current.value,
                description: description.current.value,
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
          className={styles.input}
          onKeyUp={(e) => {
            if (e.key == "Enter") {
              addContenToTable({
                category: category.current.value,
                description: description.current.value,
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
            addContenToTable({
              category: category.current.value,
              description: description.current.value,
            });
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
        <p>09:45pm</p>
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
      <TableRowInput addContenToTable={addContenToTable} />
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
