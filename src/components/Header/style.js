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

  @media screen and (min-width: 1137px) {
    max-width: 113.6rem;
    margin: auto;
  }
`;

export const LogoWrapper = styled.span`
  flex: 1;
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