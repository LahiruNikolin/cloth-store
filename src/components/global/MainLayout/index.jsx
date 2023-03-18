import * as Styled from "./index.styled";
import useWindowSize from "@/hooks/useWindowSize";

const MainLayout = ({ children }) => {
  const { height } = useWindowSize();
  return <Styled.MainLayout height={height}>{children}</Styled.MainLayout>;
};

export default MainLayout;
