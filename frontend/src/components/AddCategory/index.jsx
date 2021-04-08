import React, { useContext, useState } from "react"
import styles from "./index.module.css";
import { addCategory } from "../../api";
import { CategoriesContext } from "../../context";

const AddCategory = () => {
  const categoriesContext = useContext(CategoriesContext);

  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [adding, setAdding] = useState(false);

  const handleClick = async () => {
    if(adding) {
      if(value.length < 3) {
        setError("min 3 chars")
        return;
      }
      const res = await addCategory({ name: value });

      categoriesContext.addCategory(res);
      setValue("");
    } else {
      setAdding(true);
    }
  };

  const handleClose = () => {
    setValue("");
    setAdding(false);
  };

  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleChange = e => {
    setValue(e.target.value)
    setError(null)
  }

  return (
    <>
      <div>
        {adding && <input onKeyUp={handleEnterClick} className={styles.input} type="text" value={value} onChange={handleChange} />}
        <button onClick={handleClick} className={styles.button}>{adding ? "add" : "add category"}</button>
        {adding && <button onClick={handleClose} className={styles.button}>x</button>}
      </div>
      {error && <small>{error}</small>}
    </>
  )
}

export default AddCategory
