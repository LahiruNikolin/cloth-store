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
`;

export const ClothDescriptionContainer = styled.div`
  border-radius: 15px;
  background: ${COLORS.MALE};
  padding: 10px 18px 17px 18px;
`;

export const PriceText = styled(Typography)`
  color: #0e42fd;
`;

export const ImgContianer = styled(Typography)`
  padding-top: 10px;
`;
