import { Header } from "../../components/Header";
import { HeroSection } from "./HeroSection";
import { StarWarsSection } from "./StarWarsSection";
import { ConsolesSection } from './ConsolesSection';
import { MiscellaneousSection } from "./MiscellaneousSection";
import { Footer } from "../../components/Footer";

import {
  HomeScreenContainer,
  HomeProductSectionWrapper
} from './style';

export function HomeScreen() {
  return(
    <HomeScreenContainer>
      <Header btnHref='/login' btnTitle='Login' btnStyle='secondary' btnShow={true} />
      <HeroSection />

      <HomeProductSectionWrapper>
        <StarWarsSection />
        <ConsolesSection />
        <MiscellaneousSection />
      </HomeProductSectionWrapper>

      <Footer />
    </HomeScreenContainer>
  );
}