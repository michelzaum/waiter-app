import styled from "styled-components";

export const NewProductModalOverlay = styled.div`
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

export const NewProductModalBody = styled.div`
  background: #FFF;
  border-radius: 0.5rem;
  padding: 2rem;
  padding-bottom: 0;
  max-width: 928px;

  .new-product-header {
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
`;

export const NewProductModalContent = styled.div`
  padding: 3rem 0;

  form {
    display: flex;
    align-items: center;
    gap: 2rem;

    .product-section {
      height: 718px;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      span {
        font-size: 18px;
        font-weight: 600;
        color: rgba(102, 102, 102, 1);
      }

      .product-image-container {
        height: 244px;
        width: 416px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(250, 250, 250, 1);
        border: 1px solid rgba(204, 204, 204, 1);
        border-radius: 8px;

        .no-image-container {
          flex: 1;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            max-width: 100%;
            height: 176px;
            background-size: contain;
          }
        }

        .change-image-text-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          height: 68px;
          width: 100%;
          background-color: rgba(255, 255, 255, 1);
        }

        label {
          border: transparent;
          border-radius: 8px;
          color: rgba(215, 48, 53, 1);
          font-weight: 600;
          cursor: pointer;
        }

        input[type=file] {
          display: none;
        }
      }
    }

    .ingredients-section {
      height: 718px;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;

      .ingredients-section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 18px;
          font-weight: 600;
          color: rgba(102, 102, 102, 1);
        }

        button {
          background: none;
          border: none;
          font-size: 14px;
          font-weight: 600;
          color: rgba(215, 48, 53, 1);
        }
      }

      .ingredient-list {
        height: 476px;
        overflow: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        padding-right: 0.5rem;
        gap: 8px;
        word-break: break-all;

        span {
          font-size: 18px;
        }
      }
    }

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .product-categories {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .category-options {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }
    }
  }

  .actions-container {
    display: flex;
    justify-content: end;
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

export const CategoryItem = styled.button<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: 2px solid ${({ $isSelected }) => $isSelected ? 'rgba(215, 48, 53, 1)' : 'transparent'};
  border-radius: 75px;
  padding: 14px;
  transition: ease-in-out 0.1s;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
`;

export const IngredientItemContainer = styled.button<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 2px solid ${({ $isSelected }) => $isSelected ? 'rgba(215, 48, 53, 1)' : 'rgba(204, 204, 204, 0.3)' };
  border-radius: 8px;
  background-color: transparent;
  transition: ease-in-out 0.1s;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  input {
    display: none;
  }
`;

export const Button = styled.button`
  background: rgba(215, 48, 53, 1);
  border-radius: 44px;
  border: 0;
  color: #fff;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  line-height: 16px;

  @media (max-width: 430px) {
    height: 50px;
  }
`;
