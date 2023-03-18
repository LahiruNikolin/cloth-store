import * as React from "react";
import ACTION_TYPES from "../constants/actionTypes";

export const ProductContext = React.createContext();

function productReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_ALL_PRODUCTS: {
      return { ...state, products: action.payload };
    }
    case ACTION_TYPES.SET_MALE_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case ACTION_TYPES.SET_FEMALE_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ProductProvider({ children }) {
  const [state, dispatch] = React.useReducer(productReducer, {
    products: [],
  });
  
  const value = { state, dispatch };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export { ProductProvider };
