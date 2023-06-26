import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { device } from '@/styles/devices';

export const HighlightProductsWrapper = styled.ul`
  /* padding: 0 2.6rem; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  
  list-style: none;
  
  ${device.tabletS} {
    flex-direction: row;
    align-items: baseline;
  }
`;