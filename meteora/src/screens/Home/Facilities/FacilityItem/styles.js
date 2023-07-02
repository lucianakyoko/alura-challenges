import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import { textBold, textNormal } from "@/styles/typography";

export const FacilityItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  .icon {
    color: ${colors.highlight};
    font-size: 5.6rem;

    ${device.tabletS} {
      font-size: 7.2rem;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;

    .title {
      color: ${colors.highlight};
      ${textBold(1.6)}
      text-transform: uppercase;
    }
    .description {
      max-width: 20rem;
      ${textNormal('white', 1.3, 2)}
    }
  }
`;