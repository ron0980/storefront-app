import React, { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { AppContextType, Product } from "../interface/interface";

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {

  // State management for selected category and product.
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  // State for holding all available categories and products.
  const [allCategories, setAllCategories] = useState<string[] | null>(null);
  const [allProducts, setProducts] = useState<Product[] | null>(null);

  // Fetch list of product categories from the API.
  const { data: categories } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  // Fetch products based on selected category from the API.
  const { data: products, isLoading } = useFetch(
    `https://fakestoreapi.com/products/category/${selectedCategory}`
  );

  // Effect hook to set available categories once the fetch completes.
  useEffect(() => {
    if (categories && categories.length > 0) {
      setAllCategories(categories);
    }
  }, [categories]);

  // Effect hook to set products whenever selected category or fetched products change.
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

// useAppContext: Custom hook to access app-wide state from anywhere in the component tree.
// It throws an error if not used within an AppProvider.
export const useAppContext = (): AppContextType | null => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
