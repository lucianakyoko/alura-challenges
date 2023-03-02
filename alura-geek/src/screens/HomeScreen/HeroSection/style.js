import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const HeroSectionContainer = styled.section`
  width: 100%;
  height: 19.2rem;
  
  background-image: url(/hero-mobile.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
  position: relative;
  padding: 1.6rem;
  
  @media screen and (min-width: 767px) {
    background-image: url(/hero-tablet.png);
    
    height: 35.2rem;
    padding: 3.2rem;
  }
  
  @media screen and (min-width: 1200px) {
    background-image: url(/hero-desktop.png);
    padding: 0;
  }
`;

export const HeroSectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .8rem;

  position: absolute;
  bottom: 1.6rem;
  
  @media screen and (min-width: 767px) {
    gap: 1.6rem;
    bottom: 3.2rem;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    max-width: 113.6rem;

    left: 50%;
    transform: translateX(-50%);
  }
`;

export const HeroSectionTitle = styled.h2`
  color: ${colors.primary.white100};
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 2.6rem;
  
  @media screen and (min-width: 767px) {
    font-size: 5.2rem;
    line-height: 6.1rem;
  }
`;

export const HeroSectionParagraph = styled.p`
  color: ${colors.primary.white100};
  font-size: 1.4rem;
  line-height: 1.6rem;
  
  @media screen and (min-width: 767px) {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 2.6rem;
  }
`;