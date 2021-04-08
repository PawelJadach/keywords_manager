import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal';

import styles from './index.module.css';

Modal.setAppElement('#root')

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(17, 12, 99, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px',
    height: '300px',
    background: 'var(--yellow)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
};

const AddTagModal = ({ isOpen, setIsOpen, categoryName }) => {
  const [value, setValue] = useState('');

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value)
  }

  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="add new tag modal"
    >

      <button className={styles.close} onClick={closeModal}><i class="fa fa-times fa-lg" aria-hidden="true"></i></button>
      <h2 className={styles.header}>adding new tag to category {categoryName}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <span>Tag name</span>
        <input value={value} onChange={e => setValue(e.target.value)} className={styles.input} />
        <button className={styles.submit}>add tag</button>
      </form>
    </Modal>
  )
}

AddTagModal.propTypes = {

}

export default AddTagModal
