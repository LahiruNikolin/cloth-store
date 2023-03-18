import React from "react";
import * as Styled from "../../styles/MenCategories.styled";
import SectionGreeter from "@/components/global/SectionGreeter";
import ClothCardsCollection from "@/components/global/ClothCardsCollection";
import COLLECTION_TYPES from "@/constants/collectionTypes";

const MenCategories = () => {
  return (
    <Styled.MenCatContainer>
      <SectionGreeter text="Men's Clothing" />
      <Styled.CardCollectionContainer>
        <ClothCardsCollection type={COLLECTION_TYPES.MALE_ONLY} />
      </Styled.CardCollectionContainer>
    </Styled.MenCatContainer>
  );
};

export default MenCategories;
