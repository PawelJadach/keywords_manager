import React, { useContext } from "react"
import PropTypes from "prop-types"
import Tooltip from "../Tooltip";
import { removeTag } from "../../api";
import { CategoriesContext } from "../../context";
import styles from "./index.module.css";

const Tag = ({ name, id }) => {
  const categoriesContext = useContext(CategoriesContext);

  const handleRemove = async () => {
    await removeTag({ id });

    categoriesContext.removeTag({ id });
  };

  return (
    <Tooltip content="remove keyword">
      <div onClick={handleRemove} className={styles.container}>
        <span className={styles.name}>{name}</span>
        <button className={styles.remove}><i className="fas fa-trash"></i></button>
      </div>
    </Tooltip>
  )
}

Tag.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
}

export default Tag
