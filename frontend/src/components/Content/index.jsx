import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CategoriesContext } from '../../context';
import { getCategories } from '../../api';

import Row from '../Row';
import Category from '../Category';
import Tag from '../Tag';
import AddCategory from '../AddCategory';

import styles from './index.module.css';

const propTypes = {
    props: PropTypes.object,
};

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
              'categories',
              'keywords'
            ]}
          />
          {
            categoriesContext.categories.map(category =>
              <Row
                cols={[
                  <Category id={category.id} key={category.id} name={category.name}/>,
                  <>
                    {category.keywords.map(keyword => <Tag key={keyword.id} name={keyword.name}/>)}
                  </>
                ]}
              />
            )
          }
          <AddCategory />
        </div>
    );
};

Content.propTypes = propTypes;

export default Content;