import styled from "styled-components";
import { device } from "@/styles/devices";

export const FaqContainer = styled.div`
  padding: 4.8rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
  
  ${device.tablet} {
    padding: 4.8rem 6rem;
  }

  ${device.laptop} {
    padding: 4.8rem 12rem;
  }

  .title {
    color: ${props => props.theme.text};
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 4.16rem;
    text-align: center;

    ${device.tablet} {
      font-size: 4.8rem;
      line-height: 6.24rem;
    }
  }
  
  .info-list {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: .8rem;

    ${device.laptop} {
      max-width: 99.6rem;
    }
  }
`;
