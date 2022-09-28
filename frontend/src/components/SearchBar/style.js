import styled from "styled-components";
import { colors } from "../../styles/colors";

export const SearchBarContainer = styled.label`
  position: relative;
  
  input {
    width: 0;
    height: 0;
    opacity: 0;
  }
  
  @media screen and (min-width: 767px) {
    width: 27.2rem;
    background-color: ${colors.primary.black05};
    border-radius: 2rem;

    span {
      position: absolute;
      top: 50%;
      right: 1.6rem;
      transform: translateY(-50%);

      &:hover {
        cursor: pointer;
      }
    }

    input {
      width: 100%;
      height: auto;
      opacity: 1;
      padding: 1.2rem 4.8rem 1.2rem 1.6rem;
      
      border: 1px solid ${colors.primary.black05};
      background-color: transparent;
      
      color: ${colors.primary.black50};
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.6rem;

      &:focus {
        outline: none;
        border: 1px solid ${colors.primary.black50};
        border-radius: 2rem;
      }
    }
  }

  @media screen and (min-width: 900px) {
    width: 39.3rem;
  }
`;