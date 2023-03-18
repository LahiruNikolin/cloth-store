import styled from "styled-components";
import COLORS from "../../../config/colors";

export const CategoryCTAContainer = styled.div`
  background-color: ${({ isFemale }) =>
    isFemale ? COLORS.FEMALE : COLORS.MALE};
  height: 200px;
  display: grid;
  place-items: center;
  color: #fff;
  border-radius: 20px;
  box-shadow: 4px 5px 8px 0px rgba(217, 217, 217, 1);
`;
