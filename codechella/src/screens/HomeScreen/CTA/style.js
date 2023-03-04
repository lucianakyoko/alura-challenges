import styled from "styled-components";
import { device } from "@/styles/devices";
import { colors } from "@/styles/colors";

export const CTASection = styled.section`
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${device.tablet} {
    padding: 3.2rem 6rem;
  }

  ${device.laptopL} {
    padding: 6.4rem 12rem;
    flex-direction: row;
    gap: 4.8rem;
  }

  .cta_image {
    width: 100%;
    height: 38.1rem;

    background-image: url(${props => props.theme.images.cta});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1.6rem;

    ${device.tablet} {
      width: 90%;
      margin: auto;
    }
  }

  .cta_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    .content_title {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      color: ${props => props.theme.text};
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 3.8rem;
      text-align: center;
    }
    .content_text {
      color: ${props => props.theme.text};
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 4rem;
      text-align: center;
    }
    .content_button {
      padding:  .8rem 4.4rem;
      background-color: ${props => props.theme.button};
      border-radius: 1.6rem;
      box-shadow: ${colors.boxShadow};
      
      display: flex;
      align-items: center;
      gap: 1.6rem;
      
      transition: all .3s;
      &:hover {
        background-color: ${props => props.theme.buttonHover};
      }

      .text {
        color: ${colors.white};
        font-size: 2rem;
        font-weight: 700;
        line-height: 4rem;
      }
      .icon {
        font-size: 3.2rem;
      }
    }
  }
`;