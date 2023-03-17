import { colors } from "@/styles/colors";
import styled from "styled-components";

export const Map = styled.svg`
  width: 100%;
  height: fit-content;
`;

export const SectionWrapper = styled.g`
  .sector-side {
    .sector {
      .area {
        fill: #C2C0A6;
        stroke: #C2C0A6;
        opacity: 1;
      }
    }
  }
`;

export const SectorWrapper = styled.g`
  .area {
    fill: #C2C0A6;
    stroke: #C2C0A6;
    opacity: 1;
  }
`;