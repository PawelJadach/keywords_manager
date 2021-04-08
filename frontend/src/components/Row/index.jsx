import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx";

import styles from "./index.module.css";

const Row = ({ cols, header = false }) => {
  const colorClassName = header ? styles.header : styles.normal;

  return (
    <div className={styles.row}>
      <div className={clsx(styles.col1, colorClassName)}>
        {cols[0]}
      </div>
      <div className={clsx(styles.col2, colorClassName)}>
        {cols[1]}
      </div>
    </div>
  )
}

Row.propTypes = {
  cols: PropTypes.array,
  header: PropTypes.bool,
}

export default Row
