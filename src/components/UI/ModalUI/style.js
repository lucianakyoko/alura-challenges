import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.8);

  display: flex;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
`;

export const ModalContent = styled.div`
  width: 80%;
  padding: 1.6rem;
  margin: auto;

  background-color: ${colors.primary.white100};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  h2 {
    color: ${colors.primary.black100};
    font-size: 2.2rem;
    text-align: center;
  }

  p {
    color: ${colors.primary.black100};
    font-size: 1.6rem;
    text-align: center;
  }

  @media screen and (min-width: 767px) {
    max-width: 60rem;
    padding: 3.2rem;
  }
`;

export const ModalProductDetail = styled.div `
  width: 100%;
  padding: 1.2rem;

  /* background-color: ${colors.primary.black05}; */
`;
