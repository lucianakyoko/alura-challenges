import styled from 'styled-components';
import { colors } from '@/styles/colors';

export const IndicatorsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;

  position: absolute;
  bottom: 2.6rem;
  z-index: 1;

  .indicator {
    width: 3rem;
    height: .3rem;

    display: block;
    background-color: ${colors.primary.white};
    opacity: .5;
    
    &.active {
      opacity: 1;
    }
  }
`;