import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 430px) {
    padding: 0 1.5rem;
  }
`;

export const Approach = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-weight: 500;
  }

  h1 span {
    font-weight: 300;
  }
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  min-width: 384px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 430px) {
    min-width: 200px;
    width: 100%;
  }
`;

export const FormFieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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

export const ErrorMessageContainer = styled.div`
  min-height: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: rgba(215, 48, 53, 1);
    font-size: 14px;
  }
`;

export const LoginButton = styled.button`
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
