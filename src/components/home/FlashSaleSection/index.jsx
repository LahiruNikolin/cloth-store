import * as Styled from "./index.styled";
import SectionGreeter from "../../global/SectionGreeter";
import ClothCardsCollection from "@/components/global/ClothCardsCollection";
import COLLECTION_TYPES from "@/constants/collectionTypes";

const FlashSaleSection = () => {
  return (
    <Styled.FlashSaleContainer>
      <SectionGreeter text="Flash Sale" />
      <Styled.ClothCardsContainer>
        <ClothCardsCollection limit={4} type={COLLECTION_TYPES.ALL} />
      </Styled.ClothCardsContainer>
    </Styled.FlashSaleContainer>
  );
};

export default FlashSaleSection;
