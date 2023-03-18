import * as Styled from "./index.styled";
import useWindowSize from "@/hooks/useWindowSize";
import BodyLayout from "../BodyLayout";
import Header from "@/components/global/Header";

const MainLayout = ({ header = true, children }) => {
  const { height } = useWindowSize();
  return (
    <Styled.MainLayout height={height}>
      {header && <Header />}
      <BodyLayout>{children}</BodyLayout>
    </Styled.MainLayout>
  );
};

export default MainLayout;
