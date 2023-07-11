import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const ModalImageContainer = styled.figure`
  height: 42.2rem;
  background-repeat: no-repeat;
  overflow: hidden;

  ${device.tablet} {
    width: 35rem;
    height: 42.2rem;
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  .zoomed {
    cursor: zoom-out;
  }
`;
