import * as Styled from "./index.styled";
import SectionGreeter from "@/components/global/SectionGreeter";
import CategoryCTA from "@/components/global/CategoryCTA";

const CategoriesSection = () => {
  return (
    <Styled.CategoriesSectionContainer>
      <SectionGreeter text="Categories" />
      <Styled.CategoriesCTAContainer>
        <Styled.EachCategoryWrapper>
          <CategoryCTA text="Men's Clothing" />
        </Styled.EachCategoryWrapper>
        <Styled.EachCategoryWrapper>
          <CategoryCTA text="Women's Clothing" />
        </Styled.EachCategoryWrapper>
      </Styled.CategoriesCTAContainer>
    </Styled.CategoriesSectionContainer>
  );
};

export default CategoriesSection;
