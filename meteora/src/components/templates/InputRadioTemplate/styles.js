import styled from "styled-components";
import { colors } from "@/styles/colors";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .8rem;

  &:hover {
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  }

  .input {
    &.colored {
      display: none;
    }
  }

  .label {
    color: ${colors.text};
    opacity: ${props => props.disabled ? .4 : 1};
    font-size: 1.3rem;
    line-height: 2rem;

    &.colored {
      padding-top: 1.6rem;
      position: relative;

      &::after {
        content: '';
        width: 13px;
        height: 13px;
        background-color: ${props => props.color === '#FFFFFF' ? colors.placeholder : props.color};
        border: 2px solid ${props => props.color === '#FFFFFF' ? colors.placeholder : props.color};
        border-radius: 50%;

        position: absolute;
        top: -.75rem;
        left: 49.8%;
        transform: translate(-50%);
      }
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        z-index: 2;
        transform: translate(-50%, -50%);
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color: ${colors.white};
        opacity: 0;
        transition: opacity 0.2s;
      }
    }
  }

  .input.colored:checked + .label.colored::before {
    opacity: 1;
  } 
`;