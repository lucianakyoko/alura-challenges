import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import { headingH6, textBold } from "@/styles/typography";

export const ShoppingBagContainer = styled.div`
  padding-right: 1.6rem;
  
  .total {
    margin: 2.4rem 0;
    ${device.tablet} {
      padding-right: 1.6rem;
    }
    
    p {
       text-align: end;
      font-size: 1.6rem;
    }
    .price {
      color: ${colors.text};
      ${textBold(1.8)}
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: end;

    .button {
      padding: .9rem 1.6rem;
      background-color: ${colors.button};
      border: none;
  
      ${headingH6('white', 1.6)}
      letter-spacing: .457px;
      &:hover {
        cursor: pointer;
        opacity: .9;
      }
    }
  }
`;

export const ShoppingBagList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  border-bottom: 3px solid ${colors.line};
`;

export const SubtotalWrapper = styled.div`
  margin-top: 4rem;
  display: flex;



  .subtotal {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;