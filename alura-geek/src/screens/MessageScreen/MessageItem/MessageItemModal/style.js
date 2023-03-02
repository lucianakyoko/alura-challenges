import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const ModalMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span svg g path {
    fill: ${colors.secondary.red50};
  }

  span {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: ${colors.secondary.red50};
    border: 1px solid transparent;
    padding: 1rem 1.6rem;

    transition: all .4s ease;
    &:hover {
      border: 1px solid ${colors.secondary.red80};
    }
  }
`;