import React, { createContext, useReducer } from 'react';

const CategoriesContext = createContext();

const initialState = {
    categories: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setCategories":
      return {...state, categories: action.payload };
    case "addCategory":
      return {...state, categories: [...state.categories, action.payload] };
    case "removeCategory":
      return {...state, categories: state.categories.filter(category => category.id !== action.payload) };
    default:
      return state;
  }
}

const CategoriesContextProvider = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);

  const setCategories = categories => {
    setState({ type: 'setCategories', payload: categories });
  };

  const addCategory = category => {
    setState({ type: 'addCategory', payload: category });
  };

  const removeCategory = id => {
    setState({ type: 'removeCategory', payload: id });
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories: state.categories,
        setCategories,
        addCategory,
        removeCategory,
      }}
    >
        {children}
    </CategoriesContext.Provider>
  )
}

export {
  CategoriesContext,
  CategoriesContextProvider,
}