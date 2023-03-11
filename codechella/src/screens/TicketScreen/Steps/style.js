import { colors } from "@/styles/colors";
import styled from "styled-components";


export const StepsContainer = styled.div`
  width: 30rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .dot {
    width: 2.8rem;
    height: 2.8rem;
    background-color: ${colors.boreal.tertiary200};
    border-radius: 50%;
    opacity: .4;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${colors.white};
    font-size: 1.6rem;
    font-weight: 700;

    position: relative;
    &::after {
      content: '';
      width: 4rem;
      height: 2px;
      background-color: ${colors.gray};
      opacity: 0.2;
      position: absolute;
      left: 150%;
    }
    
    &:last-child {
      &::after {
        display: none;
      }
    }

    &.active {
      background-color: ${props => props.theme.header};
      opacity: 1;

      &::after {
        background-color: ${props => props.theme.header};
        opacity: 1;
      }
    }
  }

`;