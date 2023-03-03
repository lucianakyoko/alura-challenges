import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const FooterContainer = styled.footer`
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  background-color: ${props => props.theme.footer};

  .logo-social {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;

    .social-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: .8rem;

      p {
        color: ${props => props.theme.text};
        font-size: 2rem;
        font-weight: 500;
        line-height: 4rem;
      }
    }
  }

  .text {
    color: ${props => props.theme.text};
    font-size: 2rem;
    font-weight: 500;
    line-height: 4rem;
    text-align: center;
  }

  ${device.tablet} {
    .logo-social {
      gap: 2.8rem;
      .social-links {
        flex-direction: row;
      }
    }
  }

  ${device.laptopL} {
    padding: 5rem 12rem;

    flex-direction: row;
    justify-content: space-between;

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;