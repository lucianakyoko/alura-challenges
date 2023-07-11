import styled from "styled-components";
import { device } from "@/styles/devices";

export const ProductsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;


  ${device.tabletS} {
    flex-direction: row;
    align-items: baseline;
  }
`;