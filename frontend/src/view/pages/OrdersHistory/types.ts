export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imagePath: string
};

export interface Order {
  id: string,
  table: number,
  date: string,
  products: Product[],
  category: string,
};
