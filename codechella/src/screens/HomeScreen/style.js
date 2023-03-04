import { device } from "@/styles/devices";
import styled from "styled-components";

export const LineUpSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .line-up__title {
    padding: 3.2rem 2.4rem;

    color: ${props => props.theme.text};
    font-size: 4.8rem;
    font-weight: 400;
    line-height: 6.2rem;

    ${device.tablet} {
      font-size: 6.4rem;
      line-height: 8.3rem;
    }
  }
`;

export const DecorationImg = styled.div`
  width: 100%;
  height: 31.2rem;
  background-image: url(${props => props.theme.images.lineup});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: multiply;
  
  ${device.tablet} {
    height: 33.8rem;
  }
`;