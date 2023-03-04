import NextLink from "next/link";
import { MdLocalActivity } from "react-icons/md";

import {
  CTASection
} from './style';

export function CTA() {
  return (
    <CTASection>
      <div className="cta_image">imagem</div>
      <div className="cta_content">
        <h2 className="content_title">
          <span>&#10094; 11 e 12 de Março &#10095;</span>
          <span>Aluródromo de São Paulo</span>
        </h2>
        <p className="content_text">
          Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
        </p>
        <NextLink href='ingresso' className="content_button">
          <span className="text">Comprar ingresso!</span>
          <MdLocalActivity className="icon" color="white"/>
        </NextLink>
      </div>
    </CTASection>
  );
}