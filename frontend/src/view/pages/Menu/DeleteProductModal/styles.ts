import styled from "styled-components";

export const DeleteProductModalOverlay = styled.div`
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

export const DeleteProductModalBody = styled.div`
  background: #FFF;
  border-radius: 0.5rem;
  padding: 2rem;
  padding-bottom: 0;
  max-width: 928px;

  .delete-product-header {
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

export const DeleteProductModalContent = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;

  & > span {
    font-size: 1rem;
    font-weight: 500;
    margin: 1.5rem 0;
  }

  .actions-container {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      margin-top: 2rem;
      flex: 1;
      background: none;
      border: none;
      border-radius: 44px;
      padding: 14px 28px;
      font-size: 1rem;
      font-weight: 600;
      background-color: rgba(215, 48, 53, 1);
      color: rgba(255, 255, 255, 1);

      &.secondary {
        background-color: transparent;
        color: rgba(215, 48, 53, 1);
      }
    }
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  max-width: 352px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 0 8px 8px 0;

  img {
    width: 45%;
    border-radius: 8px 0 0 8px;
  }

  div {
    width: 65%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 12px;

    span {
      font-size: 1rem;
      font-weight: 500;

      &:nth-child(2) {
        font-weight: 600;
      }
    }
  }
`;
