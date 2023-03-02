import { useState } from 'react';

import { Logo } from '../../Logo';
import { Button } from '../../Button';
import { Loader } from '../../Loader';
import { SuccessMessageModal } from './SuccessMessageModal';

import {
  PrimaryFooterContainer,
  PrimaryFooterContendBox,
  LogoAndLinksWrapper,
  FormWrapper,
  FormContent,
  ErrMessageWrapper,
} from './style';

export function PrimaryFooter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errMessage, setErrMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (event) => {
    event.preventDefault();

    if(!email || !message) {
      setErrMessage(true);
    } else {
      setLoading(true);

      await fetch('/api/messages', {
        body: JSON.stringify({
          email: email,
          message: message,
          read: false
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST'
      });

      setLoading(false);
      setSuccessMessage(true);
      setEmail('');
      setMessage('');
    }
  }

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
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder='Digite seu nome'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="message">Mensagem</label>
              <textarea 
                name="message" 
                id="message" 
                placeholder='Escreva sua mensagem'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </FormContent>
          {
            errMessage && 
            <ErrMessageWrapper>* Verifique todos os campos e tente novamente.</ErrMessageWrapper>
          }
          <Button 
            showBtn 
            title="Enviar mensagem" 
            btnStyle="primary" 
            onClickFunction={handleSendMessage}
          />
        </FormWrapper>
      </PrimaryFooterContendBox>

      { loading && <Loader />}
      { successMessage && <SuccessMessageModal setSuccessMessage={setSuccessMessage}/>}
    </PrimaryFooterContainer>
  );
}

