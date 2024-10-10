import styled from "styled-components";

export const DelteUserModalOverlay = styled.div`
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

export const DelteUserModalBody = styled.div`
  background: #FFF;
  border-radius: 0.5rem;
  padding: 2rem;
  padding-bottom: 0;
  width: 480px;
`;


export const DeleteUserModalHeader = styled.div`
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

export const DeleteUserModalContent = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  span {
    font-weight: 500;
  }

  .actions-container {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;

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

export const FormFieldGroup = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  width: 100%;

  label {
    font-size: 14px;
    line-height: 21px;
    color: rgba(51, 51, 51, 1);
  }

  div {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: 0;
      position: absolute;
      right: 0;
      padding-right: 1.5rem;
    }
  }

  input {
    height: 56px;
    width: 100%;
    border: 1px solid rgba(204, 204, 204, 1);
    border-radius: 8px;
    padding: 0 1rem;
    outline-color: rgba(204, 204, 204, 1);
  }
`;
