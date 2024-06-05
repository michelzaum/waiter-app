import styled from "styled-components";

export const LayoutContainer = styled.div`
  .headerArea {
    max-width: 85vw;
    grid-area: header;
    grid-column-start: 2;
  }

  .navigationBarArea {
    grid-area: navigation;
  }

  .contentArea {
    max-width: 85vw;
    grid-area: content;
    grid-column-start: 2;
  }

  display: grid;
  gap: 1rem;
  grid-template-columns: 10rem 100%;
  grid-template-areas:
    'navigation header'
    'navigation content';
`;
