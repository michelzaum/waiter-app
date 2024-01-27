export interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => Promise<void>;
};

export interface Category {
  _id: string;
  name: string;
  icon: string;
};
