import styled from "styled-components";
import { colors } from '../../styles/colors';

export const ToastNotificationContainer = styled.div`
  display: none;

  &.toast-opened {
    padding: 1.8rem 3rem;
    position: absolute;
    right: 2.4rem;
    
    display: flex;
    gap: 6rem;
    border-radius: .4rem;
    background-color: ${colors.secondary.green80};
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    animation:fadeInOut 3s;
  }

  @keyframes fadeInOut{
    5%, 95% {
      opacity: 1;
      top: 50px;
    }
    15%, 85% {
      top: 32px;
    }
    100% {
      opacity: 0;
      top: 0px;
    }
  }
`;

export const ToastNotificationMessageWrapper = styled.div`
  color: ${colors.primary.black05};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.6rem;
  }
`;

export const ToastNotificationButtonWrapper = styled.span`
  svg path {
    stroke: ${colors.primary.black05};
  }

  &:hover {
    cursor: pointer;
  }
`;


