import styled from "styled-components";
import { colors } from "../../styles/colors";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.6rem;
  
  background-color: ${colors.primary.white100};

  @media screen and (min-width: 767px) {
    padding: 1.6rem 3.2rem;
  }
  
  @media screen and (min-width: 1137px) {
    padding: 3.2rem 0;
  }
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  @media screen and (min-width: 1137px) {
    max-width: 113.6rem;
    margin: auto;
  }
`;

export const LogoWrapper = styled.span`
  flex: 1;
`;

export const MailNotificationWrapper = styled.div`
  display: flex;
  margin-right: 2.4rem;
  position: relative;

  &.dont-show-notification {
    display: none;
  }

  span {
    padding: .04rem .4rem;
    color: ${colors.primary.white100};
    font-size: 1.4rem;
    font-weight: 600;

    position: absolute;
    bottom: -.6rem;
    right: -1rem;

    border-radius: .4rem;
    background-color: ${colors.secondary.red50};
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 767px) {
    position: absolute;
    right: 0;
  }
`;

export const BtnAndSearchBarWrapper = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.dont-show-btn {
    flex: 0;
  }

  @media screen and (min-width: 767px) {
    &.dont-show-btn {
      flex-direction: row;
      flex: 4;
    }

    flex-direction: row-reverse;
    flex: 4;
  }
`;