import styled from "styled-components";

export const NewIngredientOverlay = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewIngredientBody = styled.div`
  background: #FFF;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 480px;
  height: 630px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  .new-ingredient-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 1.5rem;
      font-weight: 600;
    }

    button {
      background: none;
      border: none;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    button {
      align-self: flex-end;
      background-color: rgba(215, 48, 53, 1);
      color: #FFF;
      border: transparent;
      border-radius: 44px;
      padding: 14px 28px;
      font-weight: 600;
    }

    .emoji-list-container {
      width: 416px;
      height: 200px;
      background: #FFF;
      display: flex;
      padding: 1rem;
      flex-wrap: wrap;
      gap: 1.5rem;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
`;

export const Input = styled.input`
  height: 56px;
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 8px;
  padding: 0 1rem;
  outline: transparent;
  font-size: 14px;
  transition: ease-in-out 0.2s;

  &:focus {
    border: 1px solid rgba(104, 104, 104, 1);
  }
`;

export const EmojiItem = styled.span<{ $isSelected: boolean }>`
  flex: 1;
  cursor: pointer;
  padding: 8px;
  border: 2px solid ${({ $isSelected }) => $isSelected ? 'rgba(215, 48, 53, 1)' : 'transparent'};
  border-radius: 50px;
  transition: ease-in-out 0.2s;
`;
