import { Button } from "../../../components/Button";
import { 
  HeroSectionContainer,
  HeroSectionContentWrapper,
  HeroSectionTitle,
  HeroSectionParagraph,
} from './style';

export function HeroSection() {
  return(
    <HeroSectionContainer>
      <HeroSectionContentWrapper>
        <HeroSectionTitle>Dezembro Promocional</HeroSectionTitle>
        <HeroSectionParagraph>Produtos selecionados com 33% de desconto</HeroSectionParagraph>
        <Button 
          title='Ver Consoles' 
          btnStyle='primary' 
          showBtn
          href='/consoles'
        />
      </HeroSectionContentWrapper>
    </HeroSectionContainer>
  );
}