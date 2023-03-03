import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const BannerBackground = styled.div`
  width: 100%; 
  height: 27rem;
  
  background-color: rgba(0,0,0,.2);
  background-image: url(${props => props.bannerImage});
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;  
  mix-blend-mode: normal;

  ${device.tablet} {
    height: 38.4rem;
  }

  ${device.laptopL} {
    height: 40.7rem;
  }
`;

export const BannerContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center; 
  justify-content: center;

  .banner-text {
    color: ${props => props.theme.text};
    font-size: 3.2rem;
    line-height: 4rem;
    text-align: center;
  }

  ${device.tablet} {
    .banner-text {
      font-size: 6.4rem;
      line-height: 8.4rem;
    }
  }

  ${device.laptopL} {
    .banner-text {
      overflow: hidden; 
      padding: 12rem 44rem;
      text-align: center;
    }
  }
`;