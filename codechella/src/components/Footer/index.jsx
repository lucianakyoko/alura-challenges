import { useTheme } from "styled-components";
import { SocialLinks } from "./SocialLinks";

import {
  FooterContainer,
} from './style';

export function Footer() {
  const theme = useTheme();
  const logo = theme.logo;

  return (
    <FooterContainer>
      <div className="logo-social">
        <img src={logo} alt="Logo da CodeChella" />
        <div className="social-links">
          <p>Acesse nossas redes:</p>
          <SocialLinks />
        </div>
      </div>
      <p className="text"><span>Desenvolvido por <a href="http://lucianakyoko.com" target="_blank" rel="noopener noreferrer">Luciana Kyoko</a> </span><span> Projeto fictício sem fins comerciais.</span></p>
    </FooterContainer>
  );
}