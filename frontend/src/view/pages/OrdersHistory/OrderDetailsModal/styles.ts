import styled from "styled-components";

export const OrderDetailsModalOverlay = styled.div`
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

export const OrderDetailsModalBody = styled.div`
  background: #FFF;
  border-radius: 0.5rem;
  padding: 2rem;
  padding-bottom: 0;
  width: 480px;
`;

export const OrderDetailsModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.5rem;
    font-weight: 600;
  }

  button {
    background: transparent;
    border: none;
  }
`;

export const OrderDetailsModalContent = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  .order-date {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
  }

  span {
    font-size: 1rem;
    font-weight: 600;

    &:first-child {
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  > span {
    font-weight: 500;
    font-size: 14px;
  }

  .order-items {
    margin-top: 1rem;
    width: 100%;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;

    span {
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8
    };
  }
`;

export const DeleteOrderRegister = styled.button`
  background: none;
  border: none;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #D73035;
`;
