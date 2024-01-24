import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState("");
  const [product, setProducts] = useState("");
  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        product,
        setProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
