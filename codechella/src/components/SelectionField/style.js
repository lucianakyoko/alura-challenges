import { colors } from "@/styles/colors";
import styled from "styled-components";

export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .8rem;

  .label {
    color: ${props => props.theme.text};
    font-size: 3.2rem;
    font-weight: 700;
    line-height:3.8rem;
  }

  .select {
    padding: 1rem;
    color: ${colors.gray};
    font-size: 2rem;
    font-weight: 500;
    line-height: 4rem;

    background-color: ${colors.white};
    border: none;

    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='32' viewBox='0 0 32 32' width='32' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 98%;
    background-position-y: 60%;
  }
`;