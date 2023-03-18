import * as Styled from "./index.styled";
import SectionGreeter from "@/components/global/SectionGreeter";
import CategoryCTA from "@/components/global/CategoryCTA";
import { useRouter } from "next/router";

const CategoriesSection = () => {
  const router = useRouter();
  return (
    <Styled.CategoriesSectionContainer>
      <SectionGreeter text="Categories" />
      <Styled.CategoriesCTAContainer>
        <Styled.EachCategoryWrapper
          onClick={() => {
            router.push("./men-categories");
          }}
        >
          <CategoryCTA text="Men's Clothing" />
        </Styled.EachCategoryWrapper>
        <Styled.EachCategoryWrapper
          onClick={() => {
            router.push("./women-categories");
          }}
        >
          <CategoryCTA text="Women's Clothing" />
        </Styled.EachCategoryWrapper>
      </Styled.CategoriesCTAContainer>
    </Styled.CategoriesSectionContainer>
  );
};

export default CategoriesSection;
