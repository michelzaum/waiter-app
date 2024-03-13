import styled from "styled-components/native";

export const OrdersContainer = styled.View`
  padding: 24px;
`;

export const OrderItem = styled.View`
  padding-top: 40px;
`;

export const OrderInfo = styled.View`
  background-color: #FFF;
  border-radius: 8px;
`;

export const OrderHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const OrderProgress = styled.View<{ backgroundColor: string }>`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const OrderProgressIndicator = styled.View<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 4px;
  width: 4px;
  border-radius: 50px;
`;

export const OrderIngredients = styled.View`
  padding: 24px;
  padding-top: 0px;
  gap: 8px;
`;
