import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import styled from "styled-components";

export const Group = styled.div`
  width: 100%;
  padding: 4.8rem 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  ${device.tablet} {
    padding: 4.8rem 6rem;
  }
  ${device.laptopL} {
    padding: 4.8rem 12rem;
  }

  .week {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    ${device.tablet} {
      position: relative;
      &::before,
      &::after {
        content: "";
        width: 14%;
        height: 1px;
        background-color: ${props => props.theme.highlightColor};
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }

    ${device.laptop} {
      &::before,
      &::after {
        width: 30%
      }
    }

    .week_title {
      padding: 1.6rem;

      color: ${colors.white};
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 4.2rem;
      text-transform: uppercase;

      background-color: ${props => props.theme.highlightColor};

      ${device.tablet} {
        font-size: 4.8rem;
        line-height: 6.2rem;
      }
    }
  }

  .group_all-groups {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    .group_bands {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;

      ${device.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3.2rem;
      }
      .levels {
        color: ${props => props.theme.text};
        text-align: center;
        &.band_level1 {
          font-size: 4.8rem;
          font-weight: 800;
          line-height: 5.6rem
        }
        &.band_level2 {
          font-size: 4rem;
          font-weight: 700;
          line-height: 4.7rem;
        }
        &.band_level3 {
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 3.8rem;
        }
        &.band_level4 {
          font-size: 3.2rem;
          font-weight: 500;
          line-height: 3.8rem;
        }
      }
    }
  }
`;