import Nextlink from 'next/link';


import { Button } from "../Button";
import { Logo } from "../Logo";
import { MailIcon } from '../icons/MailIcon'
import { SearchBar } from "../SearchBar";
import {
  HeaderContainer,
  HeaderContentWrapper,
  LogoWrapper,
  BtnAndSearchBarWrapper,
  MailNotificationWrapper
} from './style';

export function Header(props) {
  const {
    productsList, 
    btnTitle, 
    btnStyle, 
    btnShow, 
    btnHref, 
    padding, 
    onClickFunction,
    showSearchBar,
    showNotitication,
    notificationNumber
  } = props;

  return (
    <HeaderContainer>
      <HeaderContentWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <MailNotificationWrapper className={!showNotitication ? 'dont-show-notification' : ''}>
          <Nextlink href='/dashboard/mensagens'>
            <a>
              <MailIcon />
              {notificationNumber > 0 &&
                <span>{notificationNumber}</span>
              }
            </a>
          </Nextlink>
        </MailNotificationWrapper>

        <BtnAndSearchBarWrapper className={!btnShow ? 'dont-show-btn' : ''}>
          <Button 
            href={btnHref} 
            title={btnTitle} 
            btnStyle={btnStyle} 
            showBtn={btnShow}
            padding={padding}
            onClickFunction={onClickFunction}
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