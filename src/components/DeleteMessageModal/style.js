import styled from "styled-components";
import { colors } from "../../styles/colors";

export const DeleteModalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
`;

export const ModalProductImageContainer = styled.div`
  width: 12rem;
  height: 8rem;

  background-color: yellowgreen;

  @media screen and (min-width: 767px) {
    width: 20rem;
    height: 12rem;
  }
`;

export const DeleteModalContentWrapper= styled.div`
  h3 {
    color: ${colors.primary.black100};
    font-size: 1.6rem;
  }

  span {
    color: ${colors.primary.black50};
    font-size: 1.6rem;
  }
`;