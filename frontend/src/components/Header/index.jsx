import { Button } from "../Button";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import {
  HeaderContainer,
  LogoWrapper,
  BtnAndSearchBarWrapper
} from './style';

export function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <BtnAndSearchBarWrapper>
        <Button title={'Login'} btnStyle='secondary' /> 
        <SearchBar />
      </BtnAndSearchBarWrapper>
    </HeaderContainer>
  );
}