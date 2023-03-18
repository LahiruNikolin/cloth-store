/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import * as Styled from "./index.styled";
import ClothDetailsCard from "../ClothDetailsCard";
import COLLECTION_TYPES from "@/constants/collectionTypes";
import useGetAllClothes from "@/services/useGetAllClothes";
import {
  hanldeMapDataToRelavantType,
  handleGetActionType,
} from "../../../utils/helpers";
import { ProductContext } from "@/context/globalContext";

const ClothCardsCollection = ({ limit, type }) => {
  const { isLoading, data } = useGetAllClothes({ limit: limit });
  const { state, dispatch } = useContext(ProductContext);

  useEffect(() => {
    if (data) {
      dispatch({
        type: handleGetActionType(type),
        payload: hanldeMapDataToRelavantType(type)(data, { limit: limit }),
      });
    }
  }, [data]);

  return (
    <Styled.ClothCardsCollectionContainer>
      {!isLoading &&
        state.products.map((product) => (
          <ClothDetailsCard key={product._id} data={product} />
        ))}
    </Styled.ClothCardsCollectionContainer>
  );
};

ClothCardsCollection.defaultProps = {
  limit: null,
  type: COLLECTION_TYPES.ALL,
};

export default ClothCardsCollection;
