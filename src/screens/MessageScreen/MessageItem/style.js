import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const MessageItemContainer = styled.li`
  padding: 1.6rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: .8rem;

  border-bottom: 1px solid ${colors.primary.black30};

  transition: all .4s ease;

  div {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    span {
      svg {
        width: 1.8rem;
      }
    }
  }

  &.read {
    p {
      font-weight: 400;
    }
  }

  &:hover {
    cursor: pointer;
    background-color: ${colors.primary.white100};
  }

  @media screen and (min-width: 767px) {
    flex-direction: row;
    gap: 2.4rem;
  }
`;

export const Email = styled.p`
  color: ${colors.primary.black100};
  font-size: 1.6rem;
  font-weight: 600;
  `;

export const Message = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;

  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 767px) {
    max-width: 40ch;
  }
`;
