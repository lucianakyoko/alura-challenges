import styled from "styled-components";

import { device } from "@/styles/devices";
import { backgroundImage } from "@/styles/mixin";

export const BannerBackground = styled.div`
  width: 100%; 
  height: 27rem;
  
  background-color: rgba(0,0,0,.2);
  background-image: url(${props => props.bannerImage});
  ${backgroundImage('normal', 'cover')};
  background-attachment: fixed;

  ${device.tablet} {
    height: 38.4rem;
  }

  ${device.laptop} {
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

    ${device.tablet} {
      font-size: 6.4rem;
      line-height: 8.4rem;
    }
  }
`;