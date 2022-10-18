import { Logo } from '../../Logo';
import { Button } from '../../Button';

import {
  PrimaryFooterContainer,
  PrimaryFooterContendBox,
  LogoAndLinksWrapper,
  FormWrapper,
  FormContent,
} from './style';

export function PrimaryFooter() {
  return (
    <PrimaryFooterContainer>
      <PrimaryFooterContendBox>
        <LogoAndLinksWrapper>
          <span>
            <Logo isFixedSize={true} />
          </span>
          <ul>
            <li><a href="">Quem somos nós</a></li>
            <li><a href="">Política de privacidade</a></li>
            <li><a href="">Programa fidelidade</a></li>
            <li><a href="">Nossas lojas</a></li>
            <li><a href="">Quero ser franqueado</a></li>
            <li><a href="">Anuncie aqui</a></li>
          </ul>
        </LogoAndLinksWrapper>

        <FormWrapper>
          <p>Fale conosco</p>
          <FormContent>
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" placeholder='Digite seu nome'/>
            </div>

            <div>
              <label htmlFor="message">Mensagem</label>
              <textarea name="message" id="message" placeholder='Escreva sua mensagem'></textarea>
            </div>
          </FormContent>
          <Button 
            showBtn 
            title="Enviar mensagem" 
            btnStyle="primary" 
          />
        </FormWrapper>
      </PrimaryFooterContendBox>
    </PrimaryFooterContainer>
  );
}