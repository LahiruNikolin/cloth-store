import * as Styled from "./index.styled";
import Typography from "@mui/material/Typography";

const CategoryCTA = ({ text = "category_title" }) => {
  return (
    <Styled.CategoryCTAContainer>
      <Typography variant="h3">{text}</Typography>
    </Styled.CategoryCTAContainer>
  );
};

export default CategoryCTA;
