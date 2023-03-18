import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 0 2rem;
  max-width: 1100px;
  min-height: ${({ height }) => (height ? `${height}px` : "100vh")};
`;
