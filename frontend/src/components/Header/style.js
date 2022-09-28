import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1.6rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 767px) {
    padding: 1.6rem 3.2rem;
  }
  
  @media screen and (min-width: 1137px) {
    padding: 3.75rem 0;
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

  @media screen and (min-width: 767px) {
    flex-direction: row-reverse;
    flex: 4;
  }
`;