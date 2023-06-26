import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { device } from '@/styles/devices';

export const FooterContainer = styled.footer`
  padding: 1.7rem 2.3rem;
  background-color: ${colors.primary.black};

  display: flex;
  flex-direction: column;

  color: ${colors.primary.white};
  font-size: 1.3rem;
  line-height: 2rem;
  text-align: center;

  ${device.tabletS} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .8rem;
  }
`;