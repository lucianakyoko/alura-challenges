import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 2.4rem; */

  background-color: ${colors.black};

  .header {
    width: 100%;
    padding: 2rem 2.2rem;

    ${device.tablet} {
      padding: 1rem 2.3rem;
    }

    ${device.laptop} {
      max-width: 144rem;
    }

    .content-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      ${device.tablet} {
        .logo-navigation-wrapper {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
      }

      ${device.laptop} {
        .logo-navigation-wrapper {
          gap: 4rem;
        }
      }
    }

    .open-button {
      color: ${colors.highlight};
      font-size: 1.8rem;

      :hover {
        cursor: pointer;
        opacity: .8rem;
      }

      ${device.tablet} {
         display: none;
      }
    }
  }

  .searchbar-wrapper {
    width: 100%;
    padding: 2.4rem 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${colors.white};
    ${device.tablet} {
      display: none;
    }
  }
`;