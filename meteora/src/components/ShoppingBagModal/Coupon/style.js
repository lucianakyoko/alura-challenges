import styled from "styled-components";
import { colors } from "@/styles/colors";
import { headingH6, textNormal } from "@/styles/typography";

export const CouponContainer = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: .4rem;
  
  .input {
    padding: .4rem;
    
    ${textNormal('', 1.4, 2.3)}
  }

  .button {
    padding:  1rem 1.6rem;

    background-color: ${colors.button};
    border: none;
    ${headingH6('white', 1.4)}
    letter-spacing:  .457px;

    &:hover {
      cursor: pointer;
      opacity: .9;
    }
  }

  .error-message {
    color: ${colors.danger};
  }
`;