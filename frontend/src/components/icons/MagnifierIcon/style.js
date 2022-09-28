import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const MagnifierIconContainer = styled.svg`
  path {
    fill: ${colors.primary.black100};
  }

  @media screen and (min-width: 767px) {
    path {
    fill: ${colors.primary.black50};
  }
  }
`;