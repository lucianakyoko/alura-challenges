import styled from "styled-components";

export const Button = styled.span`
  width: fit-content;
  padding: 1rem;

  display: none;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.button};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
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
    font-size: 2.8rem;
  }
  &.active {
    display: flex;
  }
`;