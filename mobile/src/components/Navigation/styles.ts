import styled from "styled-components/native";

export const NavigationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

export const ItemContainer = styled.TouchableOpacity`
  align-items: center;
  gap: 4px;
  padding-top: 24px;
`;

export const ActiveIndicator = styled.View<{ isActive: boolean; }>`
  background-color: ${({ isActive }) => isActive ? '#D73035' : 'transparent'};
  height: 2px;
  width: 15px;
`;
