import { ChangeEvent, useEffect, useState } from "react";
import { DeletedProductDetails, Emoji, Ingredient, ingredientsMock } from "./types";

export function useMenu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState<boolean>(false);
  const [isNewIngredientModalOpen, setIsNewIngredientModalOpen] = useState<boolean>(false);
  const [productImagePreview, setProductImagePreview] = useState<string | undefined>('');
  const [emojiList, setEmojiList] = useState<Emoji[]>();
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [filteredIngredientsList, setFilteredIngredientsList] = useState<Ingredient[]>([]);
  const [searchedIngredient, setSearchedIngredient] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState<Array<string>>(['']);
  const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] = useState(false);
  const [productData, setProductData] = useState<DeletedProductDetails>({} as DeletedProductDetails);

  useEffect(() => {
    async function getEmojiList(): Promise<void> {
      const url = 'https://emojihub.yurace.pro/api/all/category/food-and-drink';
      const response = await fetch(url);
      const data: Emoji[] = await response.json();
      setEmojiList(convertHtmlCodeIntoEmoji(data));
    }

    getEmojiList();
  }, []);

  useEffect(() => {
    function toUpperCaseList(list: Ingredient[]): Ingredient[] {
      return list.map(item => ({
        ...item,
        name: item.name.replace(item.name[0], item.name[0].toUpperCase()),
      }));
    }

    function searchFilterIngredients(): void {
      const filteredList = ingredientsMock.filter(item => {
        if (item.name.toLowerCase().includes(searchedIngredient.toLowerCase())) {
          return item;
        }
      });

      setFilteredIngredientsList(toUpperCaseList(filteredList));
    }

    searchFilterIngredients();
  }, [searchedIngredient]);

  function handleSelectedIngredients(ingredientId: string): void {
    if (selectedIngredients.includes(ingredientId)) {
     setSelectedIngredients((prevState) => prevState.filter(
       (ingredientItemId) => ingredientItemId !== ingredientId,
     ));
   } else {
     setSelectedIngredients(prevState => [...prevState, ingredientId]);
   }
 }

  function handleSelectedEmoji(emojiHtmlCode: string): void {
    const emoji = selectedEmoji === emojiHtmlCode ? '' : emojiHtmlCode;
    setSelectedEmoji(emoji);
  }

  function handleSelectedCategory(categoryId: string): void {
    if (categoryId === selectedCategory) {
      setSelectedCategory(null);
      return;
    }
    setSelectedCategory(categoryId);
  }

  function openDeleteProductModal(productData: DeletedProductDetails) {
    setProductData(productData);
    setIsDeleteProductModalOpen(true);
  }

  function closeDeleteProductModal() {
    setIsDeleteProductModalOpen(false);
  }

  function openNewProductModal(): void {
    setIsNewProductModalOpen(true);
  }

  function closeNewProductModal(): void {
    setIsNewProductModalOpen(false);
  }

  function openNewIngredientModal(): void {
    setIsNewIngredientModalOpen(true);
  }

  function closeNewIngredientModal(): void {
    setIsNewIngredientModalOpen(false);
  }

  function selectProductImage(): void {
    document.getElementById('product-image')?.click();
  }

  function handleProductImagePreview(event: ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    setProductImagePreview((prevState) =>
      file ? URL.createObjectURL(file) : prevState,
    );
  }

  function convertHtmlCodeIntoEmoji(emoji: Emoji[]): Emoji[] {
    const emojiList: Emoji[] = [];
    emoji.forEach(code => {
      const convertedEmoji = String.fromCodePoint(Number(code.htmlCode[0].replace('&#', '').replace(';', '')));
      emojiList.push({
        htmlCode: [convertedEmoji],
      });
    });

    return emojiList;
  }

  return {
    selectedCategory,
    handleSelectedCategory,
    openNewProductModal,
    closeNewProductModal,
    isNewProductModalOpen,
    openNewIngredientModal,
    closeNewIngredientModal,
    isNewIngredientModalOpen,
    selectProductImage,
    handleProductImagePreview,
    productImagePreview,
    emojiList,
    handleSelectedEmoji,
    selectedEmoji,
    filteredIngredientsList,
    searchedIngredient,
    setSearchedIngredient,
    handleSelectedIngredients,
    selectedIngredients,
    openDeleteProductModal,
    closeDeleteProductModal,
    isDeleteProductModalOpen,
    productData,
  }
}
