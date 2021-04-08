import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css';
import Tooltip from '../Tooltip';

const Tag = ({ name, onClick }) => {
  return (
    <Tooltip content="remove keyword">
      <div onClick={onClick} className={styles.container}>
        <span className={styles.name}>{name}</span>
        <button className={styles.remove}><i className="fas fa-trash"></i></button>
      </div>
    </Tooltip>
  )
}

Tag.propTypes = {

}

export default Tag
