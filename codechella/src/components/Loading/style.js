import { colors } from "@/styles/colors";
import styled from "styled-components";

export const LoadingContainter = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);


  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    .text {
      color: ${colors.white};
      font-size: 2rem;
      font-weight: 500;
      line-height: 4rem;
      text-align: center;
    }
  }
  .dots {
    .dot {
      width: 12px;
      height: 12px;
      border: 1px solid ${props => props.theme.header};
      background: ${props => props.theme.header};
      border-radius: 50%;
      float: left;
      margin: 0 2px;
      transform: scale(0);
      animation: fx 1000ms ease infinite 0ms;
      box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.1);

      &:nth-child(2) {
        animation: fx 1000ms ease infinite 300ms
      }
      &:nth-child(3) {
        animation: fx 1000ms ease infinite 600ms
      }
    }
  }
  
  @keyframes fx {
    50% {
      transform: scale(1);
      opacity: 1
    }
    100% {
        opacity: 0
    }
  }
`;