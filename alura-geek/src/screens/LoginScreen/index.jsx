import { signIn, useSession } from 'next-auth/react';
import { Router, useRouter } from 'next/router';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

import {
  LoginScreenContainer,
  LoginFormWrapper,
  LoginInput,
  ErrMessage,
} from './style';
import { useState } from 'react';

export function LoginScreen() {
  const[errMsg, setErrMsg] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);

  const router = useRouter()
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false
    });

    if(res.ok) {
      router.push('/dashboard');
    } else {
      if (userInfo.email === '' || userInfo.password === ''){
        setInvalidInput(true);
      } else {
        setInvalidInput(false);
        setErrMsg(true);
      }
    }
  }
  return(
    <LoginScreenContainer>
      <Header 
        btnShow={false} 
        showSearchBar={false}
      />

      <LoginFormWrapper>
        <h3>Iniciar Sessão</h3>
        <form onSubmit={handleSubmit}>
          <LoginInput 
            type="text" 
            placeholder='Escreva seu email' 
            required
            value={userInfo.email}
            onChange={({target}) => setUserInfo({...userInfo, email: target.value})}
          />
          <LoginInput 
            type="password" 
            placeholder='Escreva sua senha'
            required 
            value={userInfo.password}
            onChange={({target}) => setUserInfo({...userInfo, password: target.value})}
          />
        </form>
        {errMsg && 
          <ErrMessage>E-mail ou senha invalidos</ErrMessage>
        }
        {invalidInput &&
          <ErrMessage>Todos os campos são obrigatórios</ErrMessage>
        }
        <span>
          <Button 
            size={'100%'}
            showBtn 
            type="submit"
            title='Entrar'
            btnStyle='primary'
            onClickFunction = {handleSubmit}
          />
        </span>
      </LoginFormWrapper>

      <Footer />
    </LoginScreenContainer>
  );
}