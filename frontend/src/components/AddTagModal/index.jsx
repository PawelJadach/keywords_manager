import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import Modal from "react-modal";
import styles from "./index.module.css";
import { addTag } from "../../api";
import { CategoriesContext } from "../../context";

Modal.setAppElement("#root")

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(17, 12, 99, 0.75)"
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
    height: "300px",
    background: "var(--yellow)",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
};

const AddTagModal = ({ isOpen, setIsOpen, categoryName, categoryId }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const categoriesContext = useContext(CategoriesContext);

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(value.length < 3) {
      setError("min 3 chars")
      return;
    }
    const newTag = await addTag({ category: categoryId, name: value });

    if(newTag.id) {
      categoriesContext.addTag({ categoryId: categoryId, tag: newTag });
    }
    setIsOpen(false);
    setValue("");
  }

  const handleChange = e => {
    setValue(e.target.value)
    setError(null)
  }

  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="add new tag modal"
    >

      <button className={styles.close} onClick={closeModal}><i className="fa fa-times fa-lg" aria-hidden="true"></i></button>
      <h2 className={styles.header}>adding new tag to category {categoryName}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <span>Tag name</span>
        <input autoFocus value={value} onChange={handleChange} className={styles.input} />
        {error && <small>{error}</small>}
        <button className={styles.submit}>add tag</button>
      </form>
    </Modal>
  )
}

AddTagModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  categoryName: PropTypes.string,
  categoryId: PropTypes.number,
}

export default AddTagModal
