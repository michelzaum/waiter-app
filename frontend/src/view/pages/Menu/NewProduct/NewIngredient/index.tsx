import { CloseIcon } from '../../../../../assets/images/Icons/CloseIcon';
import { NewIngredientOverlay, NewIngredientBody, Label, Input, EmojiItem } from './styles';
import { useMenu } from '../../useMenu';
import { NewIngredientProps } from '../../types';

export function NewIngredient({ isVisible, onClose, emojiList }: NewIngredientProps) {
  const { selectedEmoji, handleSelectedEmoji } = useMenu();

  if (!isVisible) {
    return null;
  }

  return (
    <NewIngredientOverlay>
      <NewIngredientBody>
        <header className='new-ingredient-header'>
          <span>Novo ingrediente</span>
          <button type='button' onClick={onClose}>
            <CloseIcon />
          </button>
        </header>

        <form>
          <div className='input-container'>
            <Label htmlFor='inputIngredientName'>Nome do ingrediente</Label>
            <Input id='inputIngredientName' placeholder='Ex: Quatro queijos' />
          </div>
          <div className='input-container'>
            <Label htmlFor='emoji'>Emoji</Label>
            <div id='emoji-list-container' className='emoji-list-container'>
              {emojiList.map((emoji) => (
                <EmojiItem
                  data-emoji-item={emoji.htmlCode[0]}
                  key={emoji.htmlCode[0]}
                  $isSelected={selectedEmoji === emoji.htmlCode[0]}
                  onClick={() => handleSelectedEmoji(emoji.htmlCode[0])}
                >
                  {emoji.htmlCode}
                </EmojiItem>
              ))}
            </div>
            <Input id='emoji' placeholder='Busque pelo emoji' />
          </div>
          <button type='button'>Salvar ingrediente</button>
        </form>
      </NewIngredientBody>
    </NewIngredientOverlay>
  )
}
