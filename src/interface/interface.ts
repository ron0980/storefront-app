// Rating Interface: Represents the rating of a product.
export interface Rating {
  count: number;
  rate: number;
}

// Product Interface: Represents a product in the system.
export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

// AppContextType Interface: Represents the main context of the app.
export interface AppContextType {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedProduct: string;
  setSelectedProduct: React.Dispatch<React.SetStateAction<string>>;
  categories: string[] | null;
  products: Product[] | null;
  isLoading: boolean;
}