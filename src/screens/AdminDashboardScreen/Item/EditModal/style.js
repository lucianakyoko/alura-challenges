import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const EditModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const EditModalFormWrapper = styled.form`
  padding: 1.2rem;
  background-color: ${colors.primary.black05};

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media screen and (min-width: 767px) {
    padding: 1.8rem;
  }
`;

export const PriceAndCategoryWrapper = styled.div`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const EditModalInputWrapper = styled.div`
  width: 100%;
  padding: 1.2rem;

  display: flex;
  flex-direction: column;
  gap: .4rem;

  background-color: ${colors.primary.white100};
  border-bottom: 1px solid transparent;
  border-radius: .4rem;
  transition: all .4s ease;

  label {
    width: 100%;
    font-size: 1.4rem;
    color: ${colors.primary.black50};
  }

  input, textarea {
    width: 100%;
    border: none;


    font-size: 1.4rem;
    color: ${colors.primary.black100};

    &:focus {
      outline: none;
    }
  }
  &:hover {
    border-bottom: 1px solid ${colors.primary.black30};
  }
`;

export const InputErrMsg = styled.span`
  color: ${colors.secondary.red80};
  font-size: 1.4rem;
  font-weight: 500;
`;

export const EditModalBtnWrapper = styled.div`
  border-color: ${colors.primary.white100};
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;