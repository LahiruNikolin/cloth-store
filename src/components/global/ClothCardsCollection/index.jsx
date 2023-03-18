import React from "react";
import * as Styled from "./index.styled";
import ClothDetailsCard from "../ClothDetailsCard";
import COLLECTION_TYPES from "@/constants/collectionTypes";

const ClothCardsCollection = ({ limit }) => {
  console.log("limit", limit);
  return (
    <Styled.ClothCardsCollectionContainer>
      {limit ? (
        <>
          <ClothDetailsCard />
          <ClothDetailsCard />
          <ClothDetailsCard />
          <ClothDetailsCard />
        </>
      ) : (
        <>
          <ClothDetailsCard />
          <ClothDetailsCard />
          <ClothDetailsCard />
          <ClothDetailsCard />
          <ClothDetailsCard />
          <ClothDetailsCard />
          <ClothDetailsCard />
          <ClothDetailsCard />
        </>
      )}
    </Styled.ClothCardsCollectionContainer>
  );
};

ClothCardsCollection.defaultProps = {
  limit: null,
  type: COLLECTION_TYPES.ALL,
};

export default ClothCardsCollection;
