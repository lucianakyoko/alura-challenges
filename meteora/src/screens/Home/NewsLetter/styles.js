import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import { headingH6, textNormal } from "@/styles/typography";

export const NewsLetterContainer = styled.div`
  padding: 2.4rem 0;

  margin: 0 auto;
  border: 1px solid ${colors.text};
  
  ${device.tablet} {
    width: 61rem;
  }
  
  ${device.laptop} {
    width: 64.9rem;
  }

  .content-wrapper {
    padding: 0 1.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }

  .paragraph {
    ${textNormal('', 1.6, 2.3)}
    text-align: center;
  }

  .input-button-wrapper {

    .input {
      padding:  .6rem 1.6rem;
      
      ${textNormal('', 1.6, 2.3)}
    }
    
    .button {
      padding:  1rem 1.6rem;

      background-color: ${colors.button};
      border: none;
      ${headingH6('white', 1.6)}
      letter-spacing:  .457px;
    }
  }
`;