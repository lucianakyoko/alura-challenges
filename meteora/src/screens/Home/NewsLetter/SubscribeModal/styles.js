import styled from "styled-components";
import { colors } from "@/styles/colors";

export const SubscribeModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .message {
    font-size: 1.2rem;
    text-align: center;
  }

  .coupon {
    display: flex;
    flex-direction: column;
    gap:  .8rem;

    .coupon-code {
      padding: 1rem;
      background-color: ${colors.highlight};
      font-size: 1.6rem;
      text-align: center;
      .code {
        color: ${colors.smallMenuBackground};
        font-weight: 700;
      }
    }

    .info-message {
      font-size: 1.2rem;
    text-align: center;
    }
  }
`;