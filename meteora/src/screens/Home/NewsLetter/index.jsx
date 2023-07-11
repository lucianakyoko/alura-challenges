import {
  NewsLetterContainer
} from './styles';

export function NewsLetter() {
  return (
    <NewsLetterContainer>
      <div className='content-wrapper'>
        <p className="paragraph">
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!
        </p>

        <form 
          className='input-button-wrapper'
        >
          <input 
            className='input'
            type="email" 
            placeholder="Digite seu email"
            name="email"
            id="email"
          />
          <button 
            type='submit' 
            className='button'
          >Enviar</button>
        </form>
      </div>
    </NewsLetterContainer>
  );
}