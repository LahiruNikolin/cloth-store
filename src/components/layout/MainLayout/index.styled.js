import styled from "styled-components";

export const MainLayout = styled.div`
  max-width: 1200px;
  min-height: ${({ height }) => (height ? `${height}px` : "100vh")};
  margin: auto;
`;


