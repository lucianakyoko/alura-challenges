import Nextlink from 'next/link';
import { useState } from 'react';

import { Button } from "../Button";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import {
  HeaderContainer,
  HeaderContentWrapper,
  LogoWrapper,
  BtnAndSearchBarWrapper
} from './style';

export function Header(props) {
  const {
    productsList, 
    btnTitle, 
    btnStyle, 
    btnShow, 
    btnHref, 
    padding, 
    showSearchBar} = props;

  return (
    <HeaderContainer>
      <HeaderContentWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <BtnAndSearchBarWrapper className={!btnShow ? 'dont-show-btn' : ''}>
          <Button 
            href={btnHref} 
            title={btnTitle} 
            btnStyle={btnStyle} 
            showBtn={btnShow}
            padding={padding}
          /> 
          <SearchBar 
            showSearchBar={showSearchBar}
            productsList={productsList}
          />
        </BtnAndSearchBarWrapper>
      </HeaderContentWrapper>
    </HeaderContainer>
  );
}