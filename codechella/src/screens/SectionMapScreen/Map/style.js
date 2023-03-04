import { device } from "@/styles/devices";
import styled from "styled-components";

export const MapSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${device.tablet} {
    padding: 3.2rem 6rem;
    gap: 4.8rem;
  }
  ${device.laptop} {
    flex-direction: row;
    justify-content: center;
    gap: 4.8rem;
  }

  .map {
    width: 100%;
    ${device.tablet} {
      max-width: 64.8rem;
    }
  }

  .legends {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .title {
      color: ${props => props.theme.text};
      font-size: 2rem;
      font-weight: 700;
      line-height: 4rem;

      ${device.tablet} {
        font-size: 3.2rem;
        line-height: 3.8rem;
      }
    }
  }
`;

export const LegendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  .legend_color {
    width: 3.2rem;
    height: 3.2rem;
    background-color: ${props => props.color};
  }
  .legend_label {
    color: ${props => props.theme.text};
    font-size: 2rem;
    font-weight: 500;
    line-height: 4rem;
  }
`;
 