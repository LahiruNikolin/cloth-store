import * as Styled from "./index.styled";
import SectionGreeter from "../../global/SectionGreeter";
import ClothDetailsCard from "../../global/ClothDetailsCard";
import ClothCardsCollection from "@/components/global/ClothCardsCollection";

const FlashSaleSection = () => {
  return (
    <Styled.FlashSaleContainer>
      <SectionGreeter text="Flash Sale" />
      <Styled.ClothCardsContainer>
        <ClothCardsCollection limit={4}/>
      </Styled.ClothCardsContainer>
    </Styled.FlashSaleContainer>
  );
};

export default FlashSaleSection;
