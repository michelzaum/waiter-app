import { styled } from "styled-components/native";
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  margin: 24px 24px 0;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NotificationContainer = styled.View`
  background-color: #FFFFFF;
  border-radius: 50px;
  padding: 10px;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
`;

export const Content = styled.View`

`;

export const OrderHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Table = styled.View`
  padding: 16px;
  background: #FFFFFF;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  margin-top: 24px;
`;
