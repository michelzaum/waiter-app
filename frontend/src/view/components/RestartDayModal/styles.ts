import styled from "styled-components";

export const Overlay = styled.div`
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

export const ModalBody = styled.div`
  background: #FFF;
  border-radius: 0.5rem;
  padding: 2rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-size: i.5rem;
      font-weight: 600;
      line-height: 28.8px;
    }
  }

  button {
    background: transparent;
    border: none;
  }
`;

export const ModalContent = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  span {
    font-size: 1rem;
    font-weight: 500;
    line-height; 1.5rem;
    display: block;
    width: 300px;
  }
`;

export const ModalActions = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background: #D73035;
    color: #fff;
    border-radius: 48px;
    border: 0;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1rem;
  }

  .secondary {
    padding: 14px 24px;
    color: #D73035;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 600;
    border: 0;
    background: transparent;
  }
`;
