import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { device } from '@/styles/devices';

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  .image {
    width: 14.6rem;
    height: 15.7rem;
    position: relative;

    background-color: ${colors.primary.yellow};

    ${device.tabletS} {
      width: 21.1rem;
    }
    ${device.laptop} {
      width: 16rem;
    }

    .category{
      transform: scale(1);
      transition: all .3s ease-in-out;
      
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }

  .label {
    width: 100%;
    padding: .8rem 1.6rem;

    color: ${colors.primary.white};
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
    background-color: ${colors.primary.black};
  }
`;