import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: rgba(0,0,0,.8);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTemplateContainer = styled.div`
  max-width: 34.3rem;
  max-height: 100vh;
  box-shadow: 0px 4px 15px 0px rgba(44, 63, 88, 0.35);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555555 transparent;
  }
  ${device.tablet} {
    max-width: 70rem;
  }

  .modal-header {
    background-color: ${colors.black};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.8rem 1.8rem;

    .icon-text-wrapper {
      display: flex;
      align-items: center;
      gap: 2rem;

      .icon {
        color: ${colors.highlight};
        font-size: 3.2rem;
      }
      .text {
        color: ${colors.white};
        font-size: 2rem;
        font-weight: 500;
      }
    }

    .close-button {
      color: ${colors.placeholder};
      font-size: 1.8rem;

      &:hover {
        cursor: pointer;
        opacity: .8;
      }
    }
  }

  .modal-content {
    padding: 1.6rem 1.6rem 3.2rem 1.6rem;
    background-color: ${colors.white};
  }
`;