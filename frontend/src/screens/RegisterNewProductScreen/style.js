import styled from "styled-components";
import { colors } from "../../styles/colors";

export const RegisterNewProductContainer = styled.div`
  background-color: ${colors.primary.black05};
`;

export const RegisterNewProductContentWrapper = styled.div`
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h3 {
    color: ${colors.primary.black100};
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 2.6rem;
  }

  @media screen and (min-width: 767px) {
    padding: 3.2rem;
  }

  @media screen and (min-width: 900px) {
    width: 55.9rem;
    padding: 6.4rem 0;
    margin: auto;
  }
`;

export const RegisterNewProductFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const RegisterNewProductInputWrapper = styled.div`
  padding:  .8rem 1.2rem;
  
  display: flex;
  flex-direction: column;
  gap: .4rem;
  
  background-color: ${colors.primary.white100};
  border-bottom: 1px solid transparent;
  border-radius: .4rem;

  transition: all .4s ease;

  label {
    color: ${colors.primary.black50};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.6rem;
  }

  input, textarea {
    color: ${colors.primary.black100};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2rem;

    border: none;

    &:focus {
      outline: none;
    }
  }

  &:hover {
    border-bottom: 1px solid ${colors.primary.black30};
  }
`;