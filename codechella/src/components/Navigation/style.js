import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const Navbar = styled.nav`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  
  &.active {
    display: block;
  }

  .nav-list {
    width: 70%;
    height: 100vh;
    padding: 3.2rem 2.4rem;

    background-color: ${props => props.theme.header};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;

    .nav-item {
      width: 100%;
      padding: .8rem;
      border-bottom: 1px solid ${colors.white};
      text-align: center;

      &:last-child {
        border-bottom: none;
      }

      &.active {
        .nav-link {
          text-decoration: underline;
        }
      }
      .nav-link {
        color: ${colors.white};
        font-size: 2rem;
        font-weight: 700;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  ${device.tablet} {
    height: auto;

    position: static;
    display: block;

    .nav-list {
      width: auto;
      height: auto;
      padding: 0;

      flex-direction: row;
      justify-content: space-between;
      gap: 0;

      .nav-item {
        width: auto;
        border-bottom: none;
      }
    }
  }

  ${device.laptopL} {
    .nav-list {
      justify-content: flex-end;
      gap: 3.2rem;
    }
  }
`;