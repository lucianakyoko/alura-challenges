import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import { textNormal } from "@/styles/typography";

export const NavigationContainer = styled.nav`
  padding: 2.4rem 2.2rem;
  height: fit-content;

  display: ${ props => props.mobile ? 'none' : 'none'};
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  background-color: ${colors.smallMenuBackground};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;

  &.active {
    display: ${props => props.mobile ? 'flex' : 'none'};
  }

  ${device.tablet} {
    padding: 0;
    display: ${props => props.mobile ? 'none' : 'flex'};
    background-color: transparent;
    position: static;
  }

  .close-button {
    color: ${colors.highlight};
    font-size: 1.8rem;
    :hover {
      cursor: pointer;
      opacity: .8;
    }

    ${device.tablet} { display: none;}
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  ${device.tablet} {
    display: ${props => props.mobile ? 'none' : 'flex'};
    flex-direction: row;
    gap: 2rem;
  }

  ${device.laptop} {
    gap: 4rem;
  }
`;

export const NavigationItem = styled.li`
  border-bottom: 1px solid ${colors.line};
  padding-bottom: .8rem;

  &:last-child {
    border-bottom: none;
  }

  ${device.tablet} {
    padding-bottom: none;
    border-bottom: none;
  }

  .link {
    color: ${colors.white};
    ${textNormal('white', 1.6, 2.3)};
    
    &:hover {
      color: ${colors.highlight};
    }

    &.active {
      color: ${colors.highlight};
      font-weight: 700;
    }

    ${device.tablet} {
      width: 100%;
      font-size: 1.3rem;
      line-height: 2rem;
    }
    ${device.laptop} {
      font-size: 1.6rem;
    }
  }
`;