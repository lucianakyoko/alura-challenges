import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import styled from "styled-components";

export const TicketWrapper = styled.div`
  width: 100%;
  height: 68rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
  position: relative;

  transform-style: preserve-3d;
  transition: transform 600ms cubic-bezier(0.42, 0, 0.54, 1.68);
  &.active {
    transform: rotateY(180deg);

    .flip-button {
      width: fit-content;
      left: 0rem;
    }
  }

  &.download-mode {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    transform-style: flat;
    transition: none;
    position: relative;

    &.active {
      transform: rotateY(0);
      .flip-button {
        display: none;
      }
    }
  }

  ${device.tablet} {
    height: 80rem;
  }
  ${device.laptop} {
    width: 79.2rem;
    height: 36rem;
  }

  .flip-button {
    padding: .8rem;

    color: ${colors.white};
    font-size: 2.4rem;

    background-color: ${props => props.theme.button};
    border-radius: 1.6rem;
    box-shadow: ${colors.boxShadow};
    
    display: flex;
    align-items: center;
    position: absolute;
    top: -2rem;
    right: 0rem;
    z-index: 2;
    
    transition: all .4s;
    &:hover {
      background-color: ${props => props.theme.buttonHover};
      cursor: pointer;
    }
  }
`;