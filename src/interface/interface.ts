export interface Rating {
  count: number;
  rate: number;
}

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

export interface AppContextType {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedProduct: string;
  setSelectedProduct: React.Dispatch<React.SetStateAction<string>>;
  categories: string[] | null;
  products: Product[] | null;
  isLoading: boolean;
}