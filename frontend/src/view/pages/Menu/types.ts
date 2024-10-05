export interface Emoji {
  htmlCode: string[];
}

export interface NewIngredientProps {
  isVisible: boolean;
  onClose(): void;
  emojiList: Emoji[];
}

export interface Category {
  id: string;
  emoji: string;
  name: string;
}

export interface Ingredient {
  id: string;
  emoji: string;
  name: string;
}

export interface NewProductProps {
  isVisible: boolean;
  onClose(): void;
}

export interface DeleteProductModalProps {
  isVisible: boolean;
  onClose(): void;
  productData: DeletedProductDetails
}

export interface DeletedProductDetails {
  id: string;
  imagePath: string;
  name: string;
  price: number;
  category: string;
}

export const ingredientsMock = [
  { id: '1', emoji: '🧀', name: 'Queijo prato' },
  { id: '2', emoji: '🧀', name: 'Queijo Cheddar' },
  { id: '3', emoji: '🧀', name: 'Queijo Parmesão' },
  { id: '4', emoji: '🧀', name: 'Queijo Brie' },
  { id: '5', emoji: '🧀', name: 'Queijo Gorgonzola' },
  { id: '6', emoji: '🍕', name: 'Pizza mussarela' },
  { id: '7', emoji: '🍕', name: 'Pizza calabresa' },
  { id: '8', emoji: '🍕', name: 'Pizza portuguesa' },
  { id: '9', emoji: '🍕', name: 'Pizza de frango com catupiry' },
  { id: '10', emoji: '🍕', name: 'Pizza marguerita' },
];
