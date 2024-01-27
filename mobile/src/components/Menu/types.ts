import { Product } from "../../types/Product";

export interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
};
