import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as Styled from "./index.styled";

const ClothDetailsCard = ({ data }) => {
  return (
    <Styled.CustomCard sx={{ maxWidth: 245 }}>
      <CardContent>
        <Styled.ItemTypeText>
          <Typography gutterBottom variant="h4">
            {data.title}
          </Typography>
        </Styled.ItemTypeText>
        <Styled.ImgContianer>
          <Image
            src={`/assets/images/${data.image}.png`}
            alt="green iguana"
            width={120}
            height={120}
          />
        </Styled.ImgContianer>
      </CardContent>
      <Styled.ClothDescriptionContainer
        isFemale={data.category.slug === "womens-fashion"}
      >
        <Styled.PriceText variant="h5">{`Rs.${Number(data.price).toFixed(
          2
        )}`}</Styled.PriceText>
        <Typography variant="body4">{data.description}</Typography>
      </Styled.ClothDescriptionContainer>
    </Styled.CustomCard>
  );
};

export default ClothDetailsCard;
