import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const PrimaryFooterContainer = styled.div`
  padding: 1.6rem;
  background-color: ${colors.secondary.blue10};

  @media screen and (min-width: 767px) {
    padding: 3.2rem;
  }
`;

export const PrimaryFooterContendBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    gap: 1.6rem;
  }

  @media screen and (min-width: 1130px) {
    max-width: 113.6rem;
    margin: auto;

    gap: 11.2rem; 
  }
`;

export const LogoAndLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  ul {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    list-style: none;

    li a {
      color: ${colors.primary.black100};
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1.9rem;
      text-align: center;
      text-decoration: none;
    }
  }

  @media screen and (min-width: 767px) {
    padding-right: 7.8rem;
    align-items: flex-start;

    ul {
      align-items: flex-start;
      gap: 2.4rem;
    }
  }

  @media screen and (min-width: 1130px) {  
    padding-right: 0;
    flex-direction: row;
    justify-content: space-between;
    gap: 11.2rem;

    span {
      display: block;
    }

    ul {
      width: 17.6rem;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .8rem;

  p {
    color: ${colors.primary.black100};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.9rem;
  }

  @media screen and (min-width: 767px) {
    width: 100%;
  }
`;

export const FormContent = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;

  div {
    width: 100%;
    padding:  .8rem 1.2rem;

    display: flex;
    flex-direction: column;
    gap: .4rem;

    background-color: ${colors.primary.white100};
    border-bottom: 1px solid transparent;
    border-radius:  .8rem;

    transition: all .4s ease;
    label {
      color: ${colors.primary.black50};
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.6rem;
    }

    input, textarea {
      border: none;

      color: ${colors.primary.black100};
      font-size: 1.6rem;
      font-weight: 400;
      font-family: 'Raleway', sans-serif;
      line-height: 2rem;

      &:focus {
        outline: none;
      }
    }

    &:hover {
      cursor: text;
      border-bottom: 1px solid ${colors.primary.black30};
    }
  }
`;

export const ErrMessageWrapper = styled.div`
  padding: .8rem 0;
  color: ${colors.secondary.red50};
  font-size: 1.4rem;
  font-weight: 600;
`;