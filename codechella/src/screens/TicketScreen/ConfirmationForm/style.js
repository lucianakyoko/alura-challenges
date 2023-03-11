import { device } from "@/styles/devices";
import styled from "styled-components";

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  .confirmation-title {
    color: ${props => props.theme.text};
    font-size: 2.8rem;
  }
  .text {
    color: ${props => props.theme.highlightColor};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }

  .infos-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    .infos {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      .info {
        color: ${props => props.theme.text};
        font-size: 1.6rem;
        line-height: 4rem;

        ${device.mobileL} {
          font-size: 1.8rem;
        }
        .data {
          font-weight: 700;

          &.sector {
          text-transform: uppercase;
        }
        }
      }
    }
  }  
`;

