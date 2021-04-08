import React, { useContext, useEffect } from "react";
import { CategoriesContext } from "../../context";
import { getCategories } from "../../api";
import Row from "../Row";
import Category from "../Category";
import Tag from "../Tag";
import AddCategory from "../AddCategory";

import styles from "./index.module.css";

const Content = () => {
  const categoriesContext = useContext(CategoriesContext);

    useEffect(() => {
      const asyncFunc = async () => {
        const categories = await getCategories();
        categoriesContext.setCategories(categories);
      };

      asyncFunc();
    }, []); //eslint-disable-line

    return (
      <div className={styles.container}>
        <Row
          header
          cols={[
            "categories",
            "keywords"
          ]}
        />
        {
          categoriesContext?.categories?.map(category =>
            <Row
              key={category.id}
              cols={[
                <Category id={category.id} name={category.name}/>,
                <>
                  {category?.keywords?.map(keyword => <Tag key={keyword.id} id={keyword.id} name={keyword.name}/>)}
                </>
              ]}
            />
          )
        }
        <AddCategory />
      </div>
    );
};

export default Content;