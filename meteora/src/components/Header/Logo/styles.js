import styled from 'styled-components';
import { device } from '@/styles/devices';

export const LogoWhiteContainer = styled.div`
  width: 12.57rem;

  ${device.tablet} {width: 9.956rem;}
  ${device.laptop} {width: 13.275rem;}

  .logo {
    width: 100%;
    height: 100%;
  }
`;    