import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductsCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const RightAction = styled.button`
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: rgba(215, 48, 53, 1);
`;

export const DataCount = styled.span`
  height: 27px;
  width: 26px;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: rgba(204, 204, 204, 0.2);
`;

export const Table = styled.table`
  width: 100%;
  border: 1px solid rgba(204, 204, 204, 0.4);
`;

export const TableRowHeader = styled.tr`
  height: 3rem;
  background-color: rgba(204, 204, 204, 0.2);
  border-radius: 4px;
  border: none;
`;

export const TableRowData =  styled.tr`
  height: 4rem;
  background-color: rgba(255, 255, 255, 1);
`;

export const TableHeader = styled.th<{isBiggestColumn: boolean}>`
  text-align: left;
  padding: 1rem;
  width: ${({ isBiggestColumn }) => isBiggestColumn ? '100%' : ''};
`;

export const TableData = styled.td`
  text-align: left;
  padding: 1rem;
  border-bottom: 1px solid rgba(204, 204, 204, 0.4);
`;
