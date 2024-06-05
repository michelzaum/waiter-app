import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  height: 198px;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 580px) {
    flex-direction: column;
    align-items: start;
    gap: 3rem;
  }
`;

export const PageDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PageName = styled.h1`
  font-size: 2rem;
`;

export const PageDescription = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  opacity: 0.9;
  margin-top: 6px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RestartDay = styled.button`
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RestartDayText = styled.span`
  color: #D73035;
  font-weight: 600;
`;
