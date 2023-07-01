import styled from "styled-components";
import { device } from "@/styles/devices";

export const PageContainer = styled.div`
  .page-content {    
    ${device.laptopL} {
      max-width: 144rem;
      margin: 0 auto;
    }
  }
`;