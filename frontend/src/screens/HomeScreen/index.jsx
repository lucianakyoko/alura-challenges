import { Header } from "../../components/Header";
import { HeroSection } from "./HeroSection";
import { StarWarsSection } from "./StarWarsSection";
import { ConsolesSection } from './ConsolesSection';
import { MiscellaneousSection } from "./MiscellaneousSection";

import {
  HomeScreenContainer,
  HomeProductSectionWrapper
} from './style';

export function HomeScreen() {
  return(
    <HomeScreenContainer>
      <Header />
      <HeroSection />

      <HomeProductSectionWrapper>
        <StarWarsSection />
        <ConsolesSection />
        <MiscellaneousSection />
      </HomeProductSectionWrapper>
    </HomeScreenContainer>
  );
}