import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as Styled from "./index.styled";

const ClothDetailsCard = () => {
  return (
    <Styled.CustomCard sx={{ maxWidth: 245 }}>
      <CardContent>
        <Typography gutterBottom variant="h4">
          Mens Cotton Jacket
        </Typography>
        <Styled.ImgContianer>
          <Image
            src="/assets/images/jacket.png"
            alt="green iguana"
            width={120}
            height={120}
          />
        </Styled.ImgContianer>
      </CardContent>
      <Styled.ClothDescriptionContainer>
        <Styled.PriceText variant="h5">Rs.450</Styled.PriceText>
        <Typography variant="body4">
          great outerwear jackets for Spring/Autumn/Winter, suitable for many
          occasions, such as working, hiking
        </Typography>
      </Styled.ClothDescriptionContainer>
    </Styled.CustomCard>
  );
};

export default ClothDetailsCard;
