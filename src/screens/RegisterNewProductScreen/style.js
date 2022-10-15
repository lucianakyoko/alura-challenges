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

export const PriceAndCategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  div {
    width: 100%;

    label, input {
      width: 100%;
    }
  }
`;

export const PostMessageModal = styled.div`
  width: 100%;
  height: 100vh;
  
  position: fixed;
  top: 0;
  left:0;

  background: rgba(0, 0, 0, 0.7);

  div {
    
  }
`;

export const PostMessageModalContentWrapper = styled.div`
    width: 90%;
    max-width: 40rem;
    height: 20rem;
    padding: 2.4rem;
    background-color: ${colors.primary.white100};
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
      color: ${colors.secondary.green80};
      font-size: 1.6rem;
    }
`;

export const ErrMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  h3 {
    color: ${colors.secondary.red80};
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    color: ${colors.secondary.red80};
    text-align: center;
  }
`;

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  h3 {
    color: ${colors.secondary.green80};
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    color: ${colors.secondary.green80};
    text-align: center;
  }
`;





