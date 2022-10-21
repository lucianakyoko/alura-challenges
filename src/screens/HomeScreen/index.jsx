import { Header } from "../../components/Header";
import { signIn} from 'next-auth/react';
import { HeroSection } from "./HeroSection";
import { ProductSection } from './ProductSection';
import { Footer } from "../../components/Footer";

import {
  HomeScreenContainer,
  HomeProductSectionWrapper
} from './style';
import { useState } from "react";

export function HomeScreen({products}) {
  const[showLast6products, setShowLast6Products] = useState(false);
  const categoryList = products.map(item => item.category);
  const productsSections = [...new Set(categoryList)];

  return(
    <HomeScreenContainer>
      <Header 
        onClickFunction = {() => signIn()}
        btnTitle='Login' 
        btnStyle='secondary' 
        padding='1.2rem 4.75rem'
        btnShow={true}
        showSearchBar
        productsList={products}
      />

      <HeroSection />

      <HomeProductSectionWrapper>
        {
          productsSections.map(section => (
            <ProductSection 
              key={section}
              title={section} 
              showLast6products={showLast6products}
              setShowLast6Products={setShowLast6Products}
              productsList={products} />
          ))
        }
      </HomeProductSectionWrapper>

      <Footer />
    </HomeScreenContainer>
  );
}