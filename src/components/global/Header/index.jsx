import * as Styled from "./index.styled";
import Typography from "@mui/material/Typography";

import { useRouter } from "next/router";

const Header = ({ title = "Modern Walk" }) => {
  const router = useRouter();
  return (
    <Styled.HeaderContainer
      onClick={() => {
        router.push("/home");
      }}
    >
      <Typography variant="h3">{title}</Typography>
    </Styled.HeaderContainer>
  );
};

export default Header;
