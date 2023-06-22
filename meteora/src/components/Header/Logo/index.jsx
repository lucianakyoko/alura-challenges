import NextLink from "next/link";
import NextImage from "next/image";
import logoWhite from 'public/logos/logo-white.png';

import {
  LogoWhiteContainer,
} from './styles';

export function LogoWhite() {
  return(
    <LogoWhiteContainer>
      <NextLink href='/' >
        <NextImage 
          src={logoWhite}
          alt="Logo da Meteora"
          className="logo"
        />
      </NextLink>
    </LogoWhiteContainer>
  )
}