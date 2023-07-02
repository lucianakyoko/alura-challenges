import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import { headingH6, textNormal } from "@/styles/typography";

export const BannerItemContainer = styled.li`
  width: 100%;
  height: 41.5rem;

  display: flex;
  flex-direction: column;

  ${device.tabletS} {
    flex-direction: ${props => props.even ? 'row' : 'row-reverse'};
  }
`;

export const BannerImage = styled.div`
  width: 100%;
  height: calc(41.5rem / 2);

  background-image: url(${props => props.image.mobile});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  
  ${device.tabletS} {
    height: 41.5rem;
    width: 50%;
    background-image: url(${props => props.image.tablet});
  }
  ${device.laptop} {
    background-image: url(${props => props.image.desktop});
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: calc(41.5rem / 2);
  padding-top: 2.4rem;

  background-color: ${props => props.bgColor};

  ${device.tabletS} {
    width: 50%;
    height: 100%;

    position: relative;
  }
  
  .logo-wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      width: 26.1rem;
      height: 6.3rem;
  
      background-image: url(${props => props.logo});
      background-repeat: no-repeat;
      background-size: cover;

      ${device.laptop} {
        width: 41.8rem;
        height: 10rem;
      }
    }
  }

  .text-wrapper {
    max-width: 32.2rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: .8rem;

    ${device.tabletS} {
      max-width: 57.2rem;
      gap: 1.6rem;

      position: absolute;
      right: ${props => props.even ? '9.9rem' : '0'};
      left: ${props => props.even ? '0' : '9.9rem'};
      top: 50%;
      transform: translateY(-50%);
      align-items: ${props => props.even ? 'flex-end' : 'flex-start'};
    }

    .heading {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .8rem;
      
      ${device.tabletS} {
        flex-direction: row;
      }

      span {
        ${headingH6('white', 3.2)}
        text-transform: uppercase;
      }

    }
    .paragraph {
      ${textNormal('white', 1.6, 2.3)}
      text-align: center;

      ${device.tabletS} {
        text-align: ${props => props.even ? 'right' : 'left'};
      }
    }
  }
  /* .text-wrapper {
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

      ${headingH6('white', 3.2)};
      text-transform: uppercase;

      ${device.tabletS} {
        flex-direction: row;
        gap: .8rem;
      }

      ${device.laptop} {
        font-size: 4.8rem;
      }
    }

    .paragraph {
      color: ${colors.white};
      font-size: 1.6rem;
      text-align: center;
      
      ${device.laptop} {
        font-size: 2rem;
      }
    }
  } */
`;