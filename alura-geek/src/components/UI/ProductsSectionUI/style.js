import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const HomeSectionUIContainer = styled.section`
  width: 100%;
  padding: 1.6rem;

  @media screen and (min-width: 767px) {
    padding: 3.2rem;
  }

  @media screen and (min-width: 1200px) {
    max-width: 113.6rem;
    padding: 0;
    margin: auto;
  }
`;

export const HomeSectionUIHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;


  h2 {
    color: ${colors.primary.black100};
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 2.6rem;
    text-transform: capitalize;
    
    @media screen and (min-width: 1000px) {
      font-size: 3.2rem;
      line-height: 3.8rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: .4rem;

    a {
      color: ${colors.secondary.blue100};
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.6rem;
      text-decoration: none;
    }

    @media screen and (min-width: 767px) {
      gap:  .8rem;

      a {
        font-size: 1.6rem;
        line-height: 1.9rem;
      }
    }
  }

  .dont-show-btn {
    display: none;
  }
`;