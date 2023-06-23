import  styled from 'styled-components';
import { colors } from '@/styles/colors';
import { device } from '@/styles/devices';

export const ButtonsContainer = styled.div`
  width: 100%;
  padding: 0 4.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  ${device.tablet} {
    padding: 0 3.7rem;
  }
  .button {
    color: ${colors.primary.white};
  }
`;