import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { device } from '@/styles/devices';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  position: relative;

  .header {
    background-color: ${colors.primary.black};
    width: 100%;
    padding: 2rem 2.2rem;

    ${device.tablet} {
      padding: 1rem 2.3rem;
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      ${device.tablet} {
        .logo-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
      }

      ${device.laptop} {
        .logo-nav {
          gap: 4rem;
        }
      }
    }
  }


  .menu-icon {
    color: ${colors.primary.yellow};

    :hover {
      cursor: pointer;
    }

    ${device.tablet} {
      display: none;
    }
  }
`;