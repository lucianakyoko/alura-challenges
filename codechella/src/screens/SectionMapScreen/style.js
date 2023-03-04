import { device } from "@/styles/devices";
import styled from "styled-components";

export const Details = styled.section`
  padding: 3.2rem 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${device.tablet} {
    padding: 3.2rem 6rem;
  }

  ${device.laptop} {
    padding: 4.8rem 12rem;
    
    align-items: center;
    gap: 4.8rem;
  }

  .title {
    color: ${props => props.theme.text};
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 3.8rem;

    ${device.tablet} {
      font-size: 4rem;
      text-align: center;
      line-height: 4.7rem;
    }
  }

  .details_list {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    ${device.laptop} {
      flex-direction: row;
      align-items: flex-start;
      gap: 2.4rem;
    }
  }
`;

