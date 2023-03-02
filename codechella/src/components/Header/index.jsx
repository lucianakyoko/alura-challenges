import NextLink from "next/link";
import { useState } from "react";
import { MdMenu } from 'react-icons/md';
import { Navigation } from "../Navigation";

import {
  HeaderContainer,
} from './style';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);
  return(
    <HeaderContainer>
      <NextLink href="/">
        <img src="/logo-white.png" alt="Logo da CodeChella" />
      </NextLink>
      <MdMenu 
        color='white' 
        className='menu-button'
        onClick={handleMenu}
      />

      <Navigation isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
    </HeaderContainer>
  );
}