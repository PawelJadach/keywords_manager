import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CategoriesContext } from '../../context';

import Row from '../Row';
import Category from '../Category';
import Tag from '../Tag';
import Button from '../Button';

import styles from './index.module.css';

const propTypes = {
    props: PropTypes.object,
};

const Content = () => {
    const categoriesContext = useContext(CategoriesContext);
    console.log(categoriesContext);

    return (
      <div className={styles.container}>
        <Row
            header
            cols={[
              'categories',
              'keywords'
            ]}
          />
          <Row
            cols={[
              <Category name='cars'/>,
              <>
                <Tag name='Keyword 1'/>
                <Tag name='Keyword 2'/>
                <Tag name='Keyword 3'/>
                <Tag name='Keyword 4'/>
              </>
            ]}
          />
          <Row
            cols={[
              <Category name='cars'/>,
              <>
                <Tag name='Keyword 1'/>
                <Tag name='Keyword 2'/>
                <Tag name='Keyword 3'/>
                <Tag name='Keyword 4'/>
              </>
            ]}
          />
          <Row
            cols={[
              <Category name='cars'/>,
              <>
                <Tag name='Keyword 1'/>
                <Tag name='Keyword 2'/>
                <Tag name='Keyword 3'/>
                <Tag name='Keyword 4'/>
              </>
            ]}
          />
          <Button />
        </div>
    );
};

Content.propTypes = propTypes;

export default Content;