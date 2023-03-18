import React from "react";
import * as Styled from "../../styles/WomenCategories.styled";
import SectionGreeter from "@/components/global/SectionGreeter";
import ClothCardsCollection from "@/components/global/ClothCardsCollection";
import COLLECTION_TYPES from "@/constants/collectionTypes";

const WomenCategories = () => {
  return (
    <Styled.WomenCatContainer>
      <SectionGreeter text="Women's Clothing" />
      <Styled.CardCollectionContainer>
        <ClothCardsCollection type={COLLECTION_TYPES.FEMALE_ONLY} />
      </Styled.CardCollectionContainer>
    </Styled.WomenCatContainer>
  );
};

export default WomenCategories;
