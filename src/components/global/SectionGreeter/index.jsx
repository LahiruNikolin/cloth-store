import Typography from "@mui/material/Typography";
import * as Styled from "./index.styled";

const SectionGreeter = ({ text = "section_title" }) => {
  return (
    <Styled.SectionGreeterContainer>
      <Typography variant="h6">{text}</Typography>;
    </Styled.SectionGreeterContainer>
  );
};
export default SectionGreeter;
