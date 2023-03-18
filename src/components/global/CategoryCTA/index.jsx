import * as Styled from "./index.styled";
import Typography from "@mui/material/Typography";

const CategoryCTA = ({ text = "category_title", isFemale = false }) => {
  return (
    <Styled.CategoryCTAContainer isFemale={isFemale}>
      <Typography variant="h3">{text}</Typography>
    </Styled.CategoryCTAContainer>
  );
};

export default CategoryCTA;
