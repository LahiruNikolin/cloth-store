import React from "react";
import FlashSaleSection from "@/components/home/FlashSaleSection";
import CategoriesSection from "@/components/home/CategoriesSection";

import * as Styled from "../../styles/Home.styled";

const Home = () => {
  return (
    <Styled.HomeContainer>
      <FlashSaleSection />
      <CategoriesSection />
    </Styled.HomeContainer>
  );
};

export default Home;
