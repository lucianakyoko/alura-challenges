import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import { headingH6, textBold, textNormal } from "@/styles/typography";

export const ProductItemContainer = styled.li`
padding: 1.6rem;
  width: 32.3rem;

  ${device.tabletS} {
    padding: 0;
    width: 33rem;
  }

  ${device.laptop} {
    width: 35rem;
  }

  position: relative;
`;

export const ProductImage = styled.div`
  height: 40.2rem;

  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${device.tabletS} {
    height: 38.9rem;
  }
  
  ${device.laptop} {
    height: 42.2rem;
  }
`;


export const DetailsAndButton = styled.div`
  padding: 1.3rem 1.6rem 1.6rem 1.6rem;
  border: 1px solid ${colors.line};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  .details {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    .title,
    .price {
      color: ${colors.text};
      ${textBold(1.6)}
    }

    .description {
      ${textNormal('', 1.3, 2)}
    }
  }

  .button {
    padding: .9rem 1.6rem;

    ${headingH6('white', 1.6)}
    letter-spacing:  .457px;

    background-color: ${colors.button};

    &:hover {
      cursor: pointer;
      opacity: .8;
    }
  }
`;