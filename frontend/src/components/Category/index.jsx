import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css';
import Tooltip from '../Tooltip';
import AddTagModal from '../AddTagModal';
import { removeCategory } from '../../api';
import { CategoriesContext } from '../../context';

const Category = ({ id, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const categoriesContext = useContext(CategoriesContext);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleRemove = async () => {
    await removeCategory({ id });
    categoriesContext.removeCategory(id);
  };

  return (
    <div className={styles.container}>
      <AddTagModal isOpen={isOpen} setIsOpen={setIsOpen} categoryName={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.actions}>
        <Tooltip content='Add new keyword'>
          <button onClick={handleOpen} className={styles.button}><i className="fas fa-plus"></i></button>
        </Tooltip>
        <Tooltip content='Remove category with keywords'>
          <button onClick={handleRemove} className={styles.button}><i className="fas fa-trash"></i></button>
        </Tooltip>
      </span>
    </div>
  )
}

Category.propTypes = {

}

export default Category
