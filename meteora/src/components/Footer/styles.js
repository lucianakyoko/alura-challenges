import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import { textNormal } from "@/styles/typography";

export const FooterContainer = styled.footer`
  padding: 1.7rem 2.3rem;
  background-color: ${colors.black};

  display: flex;
  flex-direction: column;

  .paragraph {
    ${textNormal('white', 1.3, 2)};
    text-align: center;

    .link {
      color: ${colors.highlight};
      font-weight: 700;
      &:hover {
        cursor: pointer;
        opacity:  .8;
      }
    }
  }

  ${device.tabletS} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .8rem;
  }
`;