import * as Styled from "./index.styled";
import Typography from "@mui/material/Typography";

const Header = ({ title = "Modern Walk" }) => {
  return (
    <Styled.HeaderContainer>
      <Typography variant="h3">{title}</Typography>
    </Styled.HeaderContainer>
  );
};

export default Header;
