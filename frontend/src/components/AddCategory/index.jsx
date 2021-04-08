import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx';

import styles from './index.module.css';
import { addCategory } from '../../api';
import { CategoriesContext } from '../../context';

const AddCategory = ({ onClick }) => {
  const categoriesContext = useContext(CategoriesContext);

  const [value, setValue] = useState('');
  const [adding, setAdding] = useState(false);

  const handleClick = async () => {
    if(adding) {
      const res = await addCategory({ name: value });

      categoriesContext.addCategory(res);
      setValue('');
    } else {
      setAdding(true);
    }
  };

  const handleClose = () => {
    setValue('');
    setAdding(false);
  };

  const handleEnterClick = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
        {adding && <input onKeyUp={handleEnterClick} className={styles.input} type="text" value={value} onChange={e => setValue(e.target.value)} />}
        <button onClick={handleClick} className={styles.button}>{adding ? 'add' : 'add category'}</button>
      {adding && <button onClick={handleClose} className={styles.button}>x</button>}
    </div>
  )
}

AddCategory.propTypes = {

}

export default AddCategory
