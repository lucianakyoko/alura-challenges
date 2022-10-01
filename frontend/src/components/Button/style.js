import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ButtonContainer = styled.div`
  display: none;

  button {
      border: 1px solid ${colors.secondary.blue100};
      transition: all .3s ease;
      &.primary {
        width: ${props => props.size};
        padding: 1.2rem 1.6rem;
        background-color: ${colors.secondary.blue100};

        a {
          color: ${colors.primary.white100};
        }

        &:hover {
          background-color: ${colors.secondary.blue80};
          border: 1px solid ${colors.secondary.blue80};
          cursor: pointer;
        }
      }
      
      &.secondary {
        padding: ${props => props.padding};
        background-color: ${colors.primary.white100};
        a {
          color: ${colors.secondary.blue100};
        }
        &:hover {
          background-color: ${colors.secondary.blue20};
          cursor: pointer;
        }
      }

      &.danger {
        padding: 1.2rem 1.6rem;
        background-color: ${colors.secondary.red80};
        border: none;

        a {
          color: ${colors.primary.white100};
        }

        &:hover {
          background-color: ${colors.secondary.red50};
          cursor: pointer;
        }
      }

      a {
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.6rem;
        text-decoration: none;
      }
  }

  &.show-btn {
    display: block;
  }
  
  @media screen and (min-width: 767px) {

    &.secondary {
      /* max-width: 16.6rem; */
      padding: 1.2rem 6.4rem;
    }
  }

  @media screen and (min-width: 900px) {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.878rem;
    
    &.secondary {
      /* max-width: 18.2rem; */
    }

    &.primary {
      padding: 1.6rem;
    }
  }
`;