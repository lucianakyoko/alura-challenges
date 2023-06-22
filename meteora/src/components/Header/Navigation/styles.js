import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { device } from '@/styles/devices';

export const NavigationContainer = styled.nav`
  padding: 1.5rem 2.4rem;
  height: fit-content;

  display: ${props => props.mobile ? 'none' : 'none'};
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  background-color: ${colors.primary.gray[200]};
  position: absolute;
  top: 0;
  right: 0;

  &.active {
    display: ${props => props.mobile ? 'flex' : 'none'};
  }
  
  ${device.tablet} {
    display: flex;
    padding: 0;
    background-color: transparent;
    position: static;
  }

  .close-icon {
    color: ${
      colors.primary.yellow
    };
    :hover {
      cursor: pointer;
    }

    ${device.tablet} {display: none;}
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    list-style: none;

    ${device.tablet} {
      display: ${props => props.mobile ? 'none' : 'flex'};
      flex-direction: row;
      gap: 2rem;
    }

    ${device.laptop} {
      gap: 4rem;
    }
    
    .nav-item {
      border-bottom: 1px solid ${colors.primary.gray[120]};
      padding-bottom: .8rem;
      
      &:last-child {
        border-bottom: none;
      }

      ${device.tablet} {
        border-bottom: none;
        padding-bottom: none;
        
      }

      .link {
        color: ${colors.primary.white};
        font-size: 1.6rem;
        line-height: 2.3rem;
        text-decoration: none;
        &:hover {
          color: ${colors.primary.yellow};
        }
        &.active {
          color: ${colors.primary.yellow};
          font-weight: 700;
        }

        ${device.tablet} {
          width: 100%;
          font-size: 1.3rem;
          line-height: 2rem;
        }

        ${device.laptop} {
          font-size: 1.6rem;
        }
      }
    }
  }
`;