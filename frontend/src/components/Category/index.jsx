import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css';
import Tooltip from '../Tooltip';
import AddTagModal from '../AddTagModal';

const Category = ({ name, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  return (
    <div onClick={onClick} className={styles.container}>
      <AddTagModal isOpen={isOpen} setIsOpen={setIsOpen} categoryName={name} />
      {name}
      <span className={styles.actions}>
        <Tooltip content='Add new keyword'>
          <button onClick={handleOpen} className={styles.button}><i className="fas fa-plus"></i></button>
        </Tooltip>
        <Tooltip content='Remove category with keywords'>
          <button className={styles.button}><i className="fas fa-trash"></i></button>
        </Tooltip>
      </span>
    </div>
  )
}

Category.propTypes = {

}

export default Category
