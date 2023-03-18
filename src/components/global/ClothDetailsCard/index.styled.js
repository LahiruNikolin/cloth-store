import styled from "styled-components";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import COLORS from "../../../config/colors";

export const CustomCard = styled(Card)`
  background: #ffffff;
  box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  text-align: center;
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ClothDescriptionContainer = styled.div`
  border-radius: 15px;
  background: ${({ isFemale }) => (isFemale ? COLORS.FEMALE : COLORS.MALE)};
  padding: 10px 30px 17px 30px;
`;

export const ItemTypeText = styled.div`
  & > h4 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
export const PriceText = styled(Typography)`
  color: #0e42fd;
`;

export const ImgContianer = styled(Typography)`
  padding-top: 10px;
`;
