import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const BagIconButtonContainer = styled.div`
  width: 4.8rem;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 8rem;
  right: .4rem;
  z-index: 2;

  background-color: ${colors.highlight};
  border-radius: 50%;

  &.active {
    display: none;
  }

  &:hover {
    cursor: pointer;
    opacity: .9;
  }

  .notification {
    position: relative;

    .icon {
      color: ${colors.button};
      font-size: 2.8rem;
    }

    .number {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;

      color: ${colors.highlight};
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
`;