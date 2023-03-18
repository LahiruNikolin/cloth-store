import { useContext } from "react";
import * as Styled from "./index.styled";
import SectionGreeter from "../../global/SectionGreeter";
import ClothDetailsCard from "../../global/ClothDetailsCard";
import ClothCardsCollection from "@/components/global/ClothCardsCollection";
import COLLECTION_TYPES from "@/constants/collectionTypes";
import { ProductContext } from "@/context/globalContext";

const FlashSaleSection = () => {
  const { state, dispatch } = useContext(ProductContext);

  console.log("context", state);
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
