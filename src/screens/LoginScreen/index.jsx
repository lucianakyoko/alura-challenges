import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

import {
  LoginScreenContainer,
  LoginFormWrapper,
  LoginInput,
} from './style';

export function LoginScreen() {

  return(
    <LoginScreenContainer>
      <Header 
        btnShow={false} 
        showSearchBar={false}
      />

      <LoginFormWrapper>
        <h3>Iniciar Sessão</h3>
        <form action="">
          <LoginInput type="text" placeholder='Escreva seu email' />
          <LoginInput type="password" placeholder='Escreva sua senha' />
        </form>

        <span>
          <Button 
            size={'100%'}
            showBtn 
            href='/dashboard'
            title='Entrar'
            btnStyle='primary'
          />
        </span>
      </LoginFormWrapper>

      <Footer />
    </LoginScreenContainer>
  );
}