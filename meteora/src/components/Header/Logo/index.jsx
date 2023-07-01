import NextLink from 'next/link';
import NextImage from 'next/image';
import logoWhite from 'public/logos/logo-white.png';

import {
  LogoContainer
} from './styles';

export function Logo() {
  return(
    <LogoContainer>
      <NextLink href='/'>
        <NextImage 
          src={logoWhite}
          alt='Logo da Meteora'
          className='logo'
        />
      </NextLink>
    </LogoContainer>
  );
}