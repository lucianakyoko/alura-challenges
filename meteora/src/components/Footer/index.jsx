import {
  FooterContainer,
} from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <p className="paragraph">2023 @ Desenvolvido por 
        <a 
          className="link"
          href="http://lucianakyoko.com" 
          target="_blank" 
          rel="noopener noreferrer"
        > Luciana Kyoko</a> | </p>
      <p className="paragraph">Projeto fictício sem fins comerciais.</p>
    </FooterContainer>
  );
}