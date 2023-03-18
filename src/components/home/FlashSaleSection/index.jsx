import * as Styled from "./index.styled";
import SectionGreeter from "../../global/SectionGreeter";
import ClothDetailsCard from "../../global/ClothDetailsCard";

const FlashSaleSection = () => {
  return (
    <Styled.FlashSaleContainer>
      <SectionGreeter text="Flash Sale" />
      <Styled.ClothCardsContainer>
        <ClothDetailsCard />
        <ClothDetailsCard />
        <ClothDetailsCard />
        <ClothDetailsCard />
      </Styled.ClothCardsContainer>
    </Styled.FlashSaleContainer>
  );
};

export default FlashSaleSection;
