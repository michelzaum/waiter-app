import styled from "styled-components";

export const LinkItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 0.5rem;
  cursor: pointer;
`;

export const ActiveIndicator = styled.div<{ isActive: boolean }>`
  height: 3px;
  width: 12px;
  background-color: ${({ isActive }) => isActive ? 'red' : 'transparent'};
`;
