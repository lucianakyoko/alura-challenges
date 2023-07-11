import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import { headingH6, textBold } from "@/styles/typography";

export const BagItemContainer = styled.li`
  padding-bottom: 1.6rem;
  border-bottom: 1px solid ${colors.line};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  .content {
    padding-right: 1.6rem;
    display: flex;
    align-items: center;
    gap: .8rem;

    border-right: 1px solid ${colors.line};

    .details {
      display: flex;
      flex-direction: column;
      gap: .4rem;
      .title {
        ${headingH6('', 1.4)}
      }
    }
  }

  .price {
    padding-right: 1.6rem;
    color: ${colors.text};
    ${textBold(1.6)};
    border-right: 1px solid ${colors.line};
  }

  .delete {
    color: ${colors.placeholder};
    font-size: 1.6rem;

    &:hover {
      cursor: pointer;
      opacity: .9;
    }
  }
`;

export const BagItemImage = styled.div`
  width: 5.6rem;
  height: 6.72rem;

  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;