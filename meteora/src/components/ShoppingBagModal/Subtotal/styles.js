import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const SubtotalContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-end;
  
  .coupon-wrapper {
    width: 100%;
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .text {
      font-size: 1.2rem;
    }
  }

  .values-wrapper {
    width: 20rem;
    padding: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    border-bottom: 1px solid ${colors.line};

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2.4rem;
    }
    .value {
      text-align: right;
      font-size: 1.6rem;

      &.discount {
        color: ${colors.placeholder};
        font-size: 1.4rem;
      }
    }
  }
`;