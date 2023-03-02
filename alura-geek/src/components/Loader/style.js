import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles/colors';

export const LoderContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const LoaderContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoaderItem = styled.span`
  width: 2rem;
  height: 2rem;
  margin: 0 .4rem;
  display: inline-block;

  background-color: ${colors.secondary.blue100};
  border-radius: .4rem;

  animation: moveup .6s linear infinite alternate;

  @keyframes moveup {
    100% {
      transform: translateY(-25px);
    }
  }

  &:nth-child(2) {
    animation-delay: .25s;
  }

  &:nth-child(3) {
    animation-delay: .5s;
  }
`;

