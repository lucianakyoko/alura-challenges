import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const ProductModalContent = styled.div`
  max-width: 31.1rem;

  ${device.tablet} {
    max-width: 70rem;
    display: flex;
  }
`;