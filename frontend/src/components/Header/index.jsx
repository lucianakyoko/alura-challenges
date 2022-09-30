import Nextlink from 'next/link';

import { Button } from "../Button";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import {
  HeaderContainer,
  LogoWrapper,
  BtnAndSearchBarWrapper
} from './style';

export function Header({btnTitle, btnStyle, btnShow, btnHref, padding}) {
  return (
    <HeaderContainer>
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
        <SearchBar />
      </BtnAndSearchBarWrapper>
    </HeaderContainer>
  );
}