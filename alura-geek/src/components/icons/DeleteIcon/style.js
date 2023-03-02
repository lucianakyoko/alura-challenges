import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const DeleteIconContainer = styled.svg`
  path {
    fill: ${colors.primary.white100};
    transition: all .4s ease;
  }
  &:hover path {
    fill: ${colors.secondary.red80};
    cursor: pointer;
  }
`;