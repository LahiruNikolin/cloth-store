import COLLECTION_TYPES from "@/constants/collectionTypes";
import ACTION_TYPES from "@/config/actionTypes";
import {
  extractMensOnlyProducts,
  extractWomensOnlyProducts,
  extractOnlyMenAndWomenProducts,
} from "./prepossesors";
export const hanldeMapDataToRelavantType = (type) => {
  switch (type) {
    case COLLECTION_TYPES.ALL:
      return extractOnlyMenAndWomenProducts;
    case COLLECTION_TYPES.FEMALE_ONLY:
      return extractWomensOnlyProducts;
    case COLLECTION_TYPES.MALE_ONLY:
      return extractMensOnlyProducts;
  }
};

export const handleGetActionType = (type) => {
  switch (type) {
    case COLLECTION_TYPES.ALL:
      return ACTION_TYPES.SET_ALL_PRODUCTS;
    case COLLECTION_TYPES.MALE_ONLY:
      return ACTION_TYPES.SET_MALE_PRODUCTS;
    case COLLECTION_TYPES.FEMALE_ONLY:
      return ACTION_TYPES.SET_FEMALE_PRODUCTS;
    default:
      return ACTION_TYPES.SET_ALL_PRODUCTS;
  }
};
