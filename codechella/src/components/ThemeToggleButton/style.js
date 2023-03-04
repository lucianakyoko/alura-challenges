import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import styled from "styled-components";

export const ToggleButton = styled.div`
  width: 14rem;
  padding:  .8rem;
  background: ${props => props.theme.button};
  box-shadow: ${colors.boxShadow};
  border-radius: 1.6rem;
  
  display: flex;
  align-items: center;
  gap: 1.6rem;

  position: absolute;
  top: 16rem;
  right: 2rem;

  transition: all .4s;
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.buttonHover};
  }

  ${device.tablet} {
    top: 24rem;
    right: 4rem;
  }
  ${device.laptop} {
    top: 16rem;
  }

  .theme-color {
    width: 2.4rem;
    height: 2.4rem;
    background: ${props => props.theme.pageBackground};
    border-radius: 50%;
  }
  .theme {
    display: flex;
    flex-direction: column;

    color: ${colors.white};
    font-size: 2rem;
    font-weight: 500;
  }
`;