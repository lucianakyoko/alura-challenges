import { useState } from "react";
import { BsList } from 'react-icons/bs';
import { LogoWhite } from "./Logo";
import { Navigation } from "./Navigation";
import { SearchBar } from "./SearchBar";

import {
  HeaderContainer
} from './styles';

export function Header() {
  const [isMenuOpen, seIsMenuOpen] = useState(false);
  const handleMenu = () => seIsMenuOpen(!isMenuOpen);

  return(
    <HeaderContainer>
      <div className="header">
        <div className="header__wrapper">
          <div className="logo-nav">
            <LogoWhite />
            <Navigation />
          </div>
          <span className="menu-icon">
            <BsList 
              size={18}
              onClick={handleMenu}
            />
          </span>
          <Navigation 
            mobile 
            isMenuOpen={isMenuOpen}
            handleMenu={handleMenu}
          />
          <SearchBar />
        </div>       
      </div>
      <SearchBar mobile/>
    </HeaderContainer>
  );
}