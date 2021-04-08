import React, { createContext, useReducer } from 'react';

const CategoriesContext = createContext();

const initialState = {
    categories: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setCategories":
      return {...state, categories: action.payload };
    default:
      return state;
  }
}

const CategoriesContextProvider = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);

  const setCategories = categories => {
    setState({ type: 'setCategories', payload: categories });
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories: state.categories,
        setCategories,
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