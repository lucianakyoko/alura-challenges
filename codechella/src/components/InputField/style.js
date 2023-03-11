import { colors } from "@/styles/colors";
import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .8rem;

  .label {
    color: ${props => props.theme.text};
    font-size: 3.2rem;
    font-weight: 700;
    line-height:3.8rem;
  }

  .input {
    padding: 1rem;
    color: ${colors.gray};
    font-size: 2rem;
    font-weight: 500;
    line-height: 4rem;

    background-color: ${colors.white};
    border: none;
  }
`;