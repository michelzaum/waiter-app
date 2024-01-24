import styled from "styled-components/native";

export const NotificationItemContainer = styled.TouchableOpacity<{ isRead: boolean }>`
  background-color: #ffffff;
  border-radius: 8px;
  margin: 0px 24px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  opacity: ${({ isRead }) => isRead ? 0.6 : 1};
`;

export const NotificationItemContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const ReadIndicator = styled.View`
  background-color: #D73035;
  height: 8px;
  width: 8px;
  border-radius: 50px;
`;

export const NotificationItemDetalis = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
