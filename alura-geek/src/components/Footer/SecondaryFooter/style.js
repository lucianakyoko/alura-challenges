import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const SecondaryFooterContainer = styled.div`
  padding: 3.2rem 6.3rem;

  p {
    color: ${colors.primary.black100};
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.9rem;
    text-align: center;
    
    a {
      color: ${colors.primary.black100};
      font-weight: 700;
      text-decoration: none;
      
      transition: all .3s ease;
      &:hover {
        color: ${colors.secondary.blue100};
      }
    }
  }

  @media screen and (min-width: 767px) {
    padding: 3.2rem 26.7rem;
  }
`;