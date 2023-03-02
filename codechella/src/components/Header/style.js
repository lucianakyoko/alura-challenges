import styled from "styled-components";
import { device } from "@/styles/devices";

export const HeaderContainer = styled.header`
  padding: 3.2rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.header};

  .menu-button {
    font-size: 3.2rem;
    &:hover {
      cursor: pointer;
    }
  }

  ${device.tablet} {
    padding: 3.2rem 6rem;
    flex-direction: column;
    gap: 3.2rem;
    .menu-button {
      display: none;
    }
  }

  ${device.laptopL} {
    padding: 3.2rem 12rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;