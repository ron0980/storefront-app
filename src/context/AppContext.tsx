import React, { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { AppContextType, Product } from "../interface/interface";

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [allCategories, setAllCategories] = useState<string[] | null>(null);
  const [allProducts, setProducts] = useState<Product[] | null>(null);
  const { data: categories } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  const { data: products, isLoading } = useFetch(
    `https://fakestoreapi.com/products/category/${selectedCategory}`
  );

  useEffect(() => {
    if (categories && categories.length > 0) {
      setAllCategories(categories);
    }
  }, [categories]);

  useEffect(() => {
    if (selectedCategory) {
      setProducts(products);
    } else {
      setProducts([]);
    }
  }, [selectedCategory, products]);

  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedProduct,
        setSelectedProduct,
        categories: allCategories,
        products: allProducts,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType | null => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
