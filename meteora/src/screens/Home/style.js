import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import { headingH6 } from "@/styles/typography";

export const HomeContentContainer = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    .section-title {
      ${headingH6('', 2.8)}
      text-align: center;
    }

    &.categories {

      margin-top: 2.4rem;
    }

    &.products {
      margin-bottom: 4.8rem;
      ${device.tabletS} {
        margin-bottom: 5.3rem;
      }
      ${device.laptop} {
        margin-bottom: 8.4rem;
      }
    }
    &.facilities {
      padding: 3.2rem 0;
      background-color: ${colors.black};

      .section-title {
        color: ${colors.white};
      }
      ${device.laptop} {
        padding: 4rem 0;
      }
    }
  }

  .news-letter {
    padding: 2.85rem 2.65rem;

    ${device.tablet} {
      padding: 3. 85rem 3.9rem;
    }
    ${device.laptop} {
      padding: 6.55rem 0;
    }
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  padding: 0 2.6rem;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  
  ${device.laptopL} {
    width: 144rem;
    margin: 0 auto;
  }
`;