import styled from "styled-components";
import { colors } from "../../styles/colors";

export const DeleteModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

export const ModalContainer = styled.div`
  width: 100%;
  padding: 1.2rem 1.6rem;
  
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;

  background-color: ${colors.primary.black05};
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

export const DeleteModalBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;