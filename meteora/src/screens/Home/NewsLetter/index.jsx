import { useState } from 'react';
import { SubscribeModal } from './SubscribeModal';

import {
  NewsLetterContainer
} from './styles';


export function NewsLetter() {
  const [email, setEmail] = useState('');
  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if(email.trim() === '') {
      setErrorMessage('O campo de e-mail não pode estar vazio.');
      return;
    } 

    setEmail('');
    setModal(true);
  }

  const handleModal = () => setModal(!modal);
  const handleChange = e => setEmail(e.target.value);

  return (
    <NewsLetterContainer>
      <div className='content-wrapper'>
        <p className="paragraph">
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!
        </p>

        <form 
          onSubmit={handleSubmit}
          className='input-button-wrapper'
        >
          <input 
            className='input'
            type="email" 
            placeholder="Digite seu email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
          
          <button 
            type='submit' 
            className='button'
            >Enviar</button>
          
          {errorMessage && (
            <p className='error-message'>{errorMessage}</p>
          )}
        </form>
      </div>

      {modal && (
        <SubscribeModal 
          handleModal={handleModal}
        />
      )}
    </NewsLetterContainer>
  );
}