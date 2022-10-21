import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const LoginScreenContainer = styled.div`
  background-color: ${colors.primary.black05};
`;

export const LoginFormWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 9.7rem 0 7.6rem 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  h3 {
    color: ${colors.primary.black100};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.9rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  span {
    width: 27.5rem;
  }

  @media screen and (min-width: 1130px) {
    gap: 2.45rem;

    form {
      gap: 2.45rem;
    }
    span {
      width: 42.3rem;
    }
  }
`;

export const LoginInput = styled.input`
  width: 27.5rem;
  padding: 1.2rem;

  border: none;
  border-bottom: 1px solid transparent;
  border-radius: .4rem;

  color: ${colors.primary.black100};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  
  transition: all .4s ease;
  &:hover {
    cursor: text;
    border-bottom: 1px solid ${colors.primary.black30};
  }
  
  &::placeholder {
    color: ${colors.primary.black50};
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid ${colors.primary.black30};
  }

  @media screen and (min-width: 1130px) {
    width: 42.3rem;
  }
`;

export const ErrMessage = styled.p`
  color: ${colors.secondary.red50};
  font-size: 1.4rem;
  font-weight: 600;
  text-align: left;
`;