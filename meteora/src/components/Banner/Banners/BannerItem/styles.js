import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { device } from '@/styles/devices';

export const ItemContainer = styled.li`
  width: 100%;
  height: 41.5rem;
 
  position: relative;
  .banner-img {
    width: 100%;
  }

  .tablet {
    display: none;
  }
  .desktop {
    display: none;
  }

  ${device.tabletS} {
    .mobile {
      display: none;
    }
    .tablet {
      display: block;
    }
  }

  ${device.laptop} {
    .tablet {
      display: none;
    }
    .desktop {
      display: block;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%; 
  padding-top: 2.4rem;
  
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  
  ${device.tabletS} {
    width: 100%; 
    padding: 0 10rem;

    left: 0;
    transform: translateY(-50%);
  }

  .texts {
    padding: 0 2.6rem;

    display: flex;
    flex-direction: column;
    gap:  .8rem;

    ${device.tabletS} {
      gap:  1.6rem;
      padding: 0;
      align-items: ${props => props.even ? 'flex-end' : 'flex-start'};
    }

    .heading {
      display: flex;
      flex-direction: column;
      align-items: center;

      color: ${colors.primary.white};
      font-size: 3.2rem;
      font-weight: 500;
      text-transform: uppercase;

      ${device.tabletS} {
        flex-direction: row;
        gap: .8rem;
      }

      ${device.laptop} {
        font-size: 4.8rem;
      }
    }
    .paragraph{
      color: ${colors.primary.white};
      font-size: 1.6rem;
      text-align: center;

      ${device.laptop} {
        font-size: 2rem;
      }
    }
  }
`;