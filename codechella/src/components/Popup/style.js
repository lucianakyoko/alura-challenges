import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

 
  .popup {
    width: 80%;

    padding: 1.6rem;
    position: absolute;
    top: 50%;
    left: 50%;

    background: ${props => props.theme.pageBackground};
    transform: translate(-50%, -50%);

    ${device.tablet} {
      padding: 3.2rem;
      width: 50rem;
      height: 24rem;
    }

    .close-btn {
      width: fit-content;
      padding: .8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${props => props.theme.button};
      border-radius: 1.6rem;
      box-shadow: ${colors.boxShadow};
      
      color: ${colors.white};
      font-size: 1.6rem;

      position: absolute;
      top: -2rem;
      right: 0;
      transition: all .4s;
      &:hover {
        background-color: ${props => props.theme.buttonHover};
        cursor: pointer;
      }
    }

    .message-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      .title {
        color: darkred;
        font-size: 2.4rem;
        text-align: center;
      }

      .message {
        color: ${props => props.theme.text};
        font-size: 2rem;
        line-height: 4rem;
        text-align: center;
      }
    }
  }
`;
