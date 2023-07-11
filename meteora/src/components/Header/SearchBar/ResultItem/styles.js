import styled from "styled-components";
import { headingH6 } from "@/styles/typography";

export const ResultItemContainer = styled.li`
  display: flex;
  gap: 1.6rem;
  
  .image {
    width: 5.6rem;
    height: 6.72rem;

    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .title-price-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    .title, .price {
      ${headingH6('', 1.4)}
    }
  }
`;