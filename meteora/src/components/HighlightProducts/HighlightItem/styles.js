import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { device } from '@/styles/devices';

export const ItemContainer = styled.li`
  width: 32.3rem;
  height: 100%;

  ${device.tabletS} {
    width: 33rem;
  }

  ${device.laptop} {
    width: 35rem;
  }
  
  .image {
    width: 100%;
    height: 40.2rem;
    position: relative;

    ${device.tabletS} {
      height: 38.9rem;
    }

    ${device.laptop} {
      height: 42.2rem;
    }
  }

  .details-button {
    padding: 1.6rem 1.6rem ;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;

    border:1px solid rgba(0, 0, 0, .13);
  
    .details {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
  
      color: ${colors.primary[220]};
  
      .title {
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 2.3rem;
      }
  
      .description {
        font-size: 1.3rem;
        line-height: 2rem;
      }
  
      .price {
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 2.3rem;
      }
    }

    .button {
      padding: .9rem 1.6rem;

      background-color: ${colors.primary.purple};

      color: ${colors.primary.white};
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: .457px;
    }
  }

`;