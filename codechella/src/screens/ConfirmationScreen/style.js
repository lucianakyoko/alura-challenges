import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import styled from "styled-components";

export const Container = styled.div`
  padding: 6.4rem 2.4rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  
  &.download-mode {
    height: 100%;
  }

  ${device.tablet} {
    padding: 6.4rem 6rem;
  }
  ${device.laptop} {
    padding: 6.4rem 12rem;
  }

  .title {
    color: ${props => props.theme.text};
    font-size: 3.2rem;
    font-weight:700;
    line-height: 3.8rem;
    text-align: center;

    ${device.laptop} {
      max-width: 79.2rem;
    }
  }

  .download-btn {
    padding: 1.6rem;

    display: flex;
    align-items: center;
    gap: 1.6rem;

    background-color: ${props => props.theme.button};
    border-radius: 1.6rem;
    border: none;
    box-shadow: ${colors.boxShadow};

    transition: all .4s;
    &:hover {
      background-color: ${props => props.theme.buttonHover};
      cursor: pointer;
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
`;
