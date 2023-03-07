import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  .form-title {
    padding: .8rem 0;
    color: ${props => props.theme.text};
    font-size: 2rem;
    text-align: center;
    background-color: ${props => props.theme.highlightColor};
  }
`;