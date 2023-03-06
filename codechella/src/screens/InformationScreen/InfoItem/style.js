import { colors } from "@/styles/colors";
import styled from "styled-components";

export const FaqWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .question_wrapper {
    width: 100%;
    padding: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.header};
    
    &:hover {
      cursor: pointer;
      background-color: ${props => props.theme.highlightColor};

    }
    .question {
      color: ${colors.white};
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 3.8rem;
    }
    .icon {
      font-size: 3.2rem;
    }
  }

  .answer {
    padding: 1.6rem;

    display: none;
    background-color: ${colors.summer.tertiary100};

    color: ${colors.gray};
    font-size: 2rem;
    font-weight: 500;
    line-height: 4rem;

    .link {
      color: ${colors.gray};
      text-decoration: underline;
    }
    &.active {
      display: block;
      margin-bottom: 2.4rem;
    }
  }
`;