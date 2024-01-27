import { Product } from '../../types/Product';

export interface CartProps {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onConfirmOrder: () => void;
  selectedTable: string;
};

export interface CartItem {
  product: Product;
  quantity: number;
};
