import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx';

import styles from './index.module.css';

const Button = ({ onClick }) => {
  const [value, setValue] = useState('');
  const [adding, setAdding] = useState(false);

  const handleClick = () => {
    if(adding) {
      console.log('Add', value)
    } else {
      setAdding(true);
    }
  };

  const handleClose = () => {
    setValue('');
    setAdding(false);
  };

  return (
    <div>
      {adding && <input className={styles.input} type="text" value={value} onChange={e => setValue(e.target.value)} />}
      <button onClick={handleClick} className={styles.button}>{adding ? 'add' : 'add category'}</button>
      {adding && <button onClick={handleClose} className={styles.button}>x</button>}
    </div>
  )
}

Button.propTypes = {

}

export default Button
