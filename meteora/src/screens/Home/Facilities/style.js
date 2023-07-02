import styled from "styled-components";
import { device } from "@/styles/devices";

export const FacilitiesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  ${device.laptop} {
    width: 97.6rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;