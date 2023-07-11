import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import { headingH6, textBold, textNormal } from "@/styles/typography";

export const DetailsContainer = styled.div`
  padding: 2.4rem 1.6rem 0 1.6rem;
  border: 1px solid rgba(0, 0, 0, .13);
  
  ${device.tablet} {
    padding: 0 1.6rem;
    border: none;
  }

  .title-description-wrapper {
    padding-bottom: 2.4rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;

    border-bottom: 1px solid ${colors.black};

    .title {
      color: ${colors.text};
      ${textBold(1.6)}
    }

    .description {
      ${textNormal('', 1.3, 2)}
    }
  }

  .price-seller-wrapper {
    padding: 2.4rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;

    border-bottom: 1px solid ${colors.line};

    .price {
      ${headingH6('', 2)}
    }

    .seller {
      color: ${colors.textLight};
      font-size: 1.3rem;
      line-height: 2rem;
    }
  }

  .options {
    padding-top: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }

  .add-button {
    padding: .9rem 1.6rem;
    margin-top: 1.6rem;

    background-color: ${colors.button};
    border: none;

    ${headingH6('white', 1.6)}
    letter-spacing: .457px;
    &:hover {
      cursor: pointer;
      opacity: .9;
    }
  }
`;