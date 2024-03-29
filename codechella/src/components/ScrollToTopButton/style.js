import { colors } from "@/styles/colors";
import styled from "styled-components";

export const Button = styled.span`
  width: fit-content;
  padding: 1rem;

  display: none;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.button};
  box-shadow: ${colors.boxShadow};
  border-radius: 50%;

  position: fixed;
  bottom: 2rem;
  right: 2rem;

  transition: all .4s;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.buttonHover};
  }
  .icon {
    font-size: 3.2rem;
  }
  &.active {
    display: flex;
  }
`;