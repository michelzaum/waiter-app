import { CloseIcon } from '../../../../assets/images/Icons/CloseIcon';
import { ImageIcon } from '../../../../assets/images/Icons/ImageIcon';
import { NoImageIcon } from '../../../../assets/images/Icons/NoImageIcon';
import { Category, NewProductProps } from '../types';
import { useMenu } from '../useMenu';
import { NewIngredient } from './NewIngredient';
import {
  Button,
  CategoryItem,
  IngredientItemContainer,
  Input,
  Label,
  NewProductModalBody,
  NewProductModalContent,
  NewProductModalOverlay,
} from './styles';

const categoriesMock: Category[] = [
  { id: '1', emoji: '🍕', name: 'Pizza' },
  { id: '2', emoji: '🍔', name: 'Lanches' },
  { id: '3', emoji: '🍻', name: 'Bebidas' },
  { id: '4', emoji: '🏷', name: 'Promoções' },
]

export function NewProduct({ isVisible, onClose }: NewProductProps) {
  const {
    selectedCategory,
    handleSelectedCategory,
    openNewIngredientModal,
    closeNewIngredientModal,
    isNewIngredientModalOpen,
    selectProductImage,
    handleProductImagePreview,
    productImagePreview,
    emojiList,
    searchedIngredient,
    setSearchedIngredient,
    filteredIngredientsList,
    handleSelectedIngredients,
    selectedIngredients,
  } = useMenu();

  if (!isVisible) {
    return null;
  }

  return (
    <NewProductModalOverlay>
      <NewProductModalBody>
        <header className='new-product-header'>
          <span>Novo produto</span>
          <button type='button' onClick={onClose}>
            <CloseIcon />
          </button>
        </header>

        <NewProductModalContent>
          <form>
            <div className='product-section'>
              <span>Imagem</span>
              <button type='button' className='product-image-container' onClick={selectProductImage}>
                <div className='no-image-container'>
                  {productImagePreview ? (
                    <img src={productImagePreview} />
                  ) : (
                    <NoImageIcon style={{ color: 'rgba(153, 153, 153, 1)',  height: 32, width: 32  }} />
                  )}
                </div>
                <input
                  type="file"
                  accept='image/*'
                  name="product-image"
                  id="product-image"
                  onChange={handleProductImagePreview}
                />
                <div className='change-image-text-container'>
                  <ImageIcon style={{ color: 'rgba(215, 48, 53, 1)', height: 24, width: 24 }} />
                  <label>Alterar imagem</label>
                </div>
              </button>
              <div className='input-container'>
                <Label htmlFor="product-name">Nome do Produto</Label>
                <Input id='product-name' placeholder='Quatro Queijos' />
              </div>
              <div className='input-container'>
                <Label htmlFor="product-description">Descrição</Label>
                <Input id='product-description' placeholder='Pizza de Quatro Queijos com borda tradicional' />
                <Label>Máximo 110 caracteres</Label>
              </div>
              <div className='product-categories'>
                <Label>Categoria</Label>
                <div className='category-options'>
                  {categoriesMock.map(category => (
                    <CategoryItem
                      type='button'
                      key={category.id}
                      $isSelected={category.id === selectedCategory}
                      onClick={() => handleSelectedCategory(category.id)}
                    >
                      <span>{category.emoji}</span>
                      <span>{category.name}</span>
                    </CategoryItem>
                  ))}
                </div>
              </div>
            </div>

            <div className='ingredients-section'>
              <div className='ingredients-section-header'>
                <span>Ingredientes</span>
                <button type='button' onClick={openNewIngredientModal}>Novo ingrediente</button>
              </div>

              <div className='input-container'>
                <Label htmlFor='ingredient-name'>Busque o ingrediente</Label>
                <Input
                  id='ingredient-name'
                  placeholder='Ex: Quatro Queijos'
                  value={searchedIngredient}
                  onChange={(event) => setSearchedIngredient(event.target.value)}
                />
              </div>

              <div className='ingredient-list'>
                {filteredIngredientsList.length > 0
                  ? filteredIngredientsList.map((ingredient) => (
                    <IngredientItemContainer
                      type='button'
                      key={ingredient.id}
                      className='ingredient-item'
                      onClick={() => handleSelectedIngredients(ingredient.id)}
                      $isSelected={selectedIngredients.includes(ingredient.id)}
                    >
                      <div>
                        <span>{ingredient.emoji}</span>
                        <Label>{ingredient.name}</Label>
                      </div>
                      <input type="checkbox" name={ingredient.id} id={ingredient.id} />
                    </IngredientItemContainer>
                  )) : (
                    <span>Nenhum ingrediente encontrado para <strong>{`"${searchedIngredient}"`}</strong></span>
                  )
                }
              </div>
            </div>
          </form>
          <div className='actions-container'>
            <Button>Salvar produto</Button>
          </div>
        </NewProductModalContent>
      </NewProductModalBody>
      <NewIngredient
        isVisible={isNewIngredientModalOpen}
        onClose={closeNewIngredientModal}
        emojiList={emojiList ?? []}
      />
    </NewProductModalOverlay>
  )
}
