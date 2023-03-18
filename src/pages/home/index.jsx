import React from "react";
import Header from "@/components/global/Header";
import FlashSaleSection from "@/components/home/FlashSaleSection";
import CategoriesSection from "@/components/home/CategoriesSection";

import * as Styled from "../../styles/home.styled";

const Home = () => {
  return (
    <Styled.HomeContainer>
      <Header />
      <FlashSaleSection />
      <CategoriesSection />
    </Styled.HomeContainer>
  );
};

export default Home;
