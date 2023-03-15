import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100%;
  overflow: hidden;

  position: relative;

  .text {
    margin-bottom: 4rem;
    color: ${props => props.theme.text};
    font-size: 2rem;
    line-height: 4rem;
  }
  .setor-wrapper {
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    ${device.tablet} {
      flex-direction: row;
      gap: 3.2rem;
    }
  }
`;

export const Map = styled.svg`
  width: 100%;
  height: 100%;

  transform-origin: center center;
  object-fit: cover;
`;

export const SectorWrapper = styled.g`
  transition: all .4s;
  .sector-side .sector {
    &:hover {
      .area {
        fill: yellowgreen;
        stroke: none;
        opacity: .2;
      }
      cursor: pointer;
    }
  }
`;

export const SectorItem = styled.g`
  transition: 1s all; 

  &:hover {
    .area {
      fill: yellowgreen;
      stroke: none;
      opacity: .2;
    }
    cursor: pointer;
  }
`;

export const FieldContainer = styled.div`
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
  .data {
    padding: 1rem;
    color: ${colors.gray};
    font-size: 2rem;
    font-weight: 500;
    line-height: 4rem;
    text-transform: uppercase;
    
    opacity: .6;
    background-color: ${colors.white};
    border: none;
  }
`;

export const Popup = styled.div`
  padding: .8rem 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;  
  
  border-left: 8px solid ${props => props.theme.highlightColor};
  background-color: ${colors.boreal.tertiary300};
  box-shadow: ${colors.boxShadow};

  position: fixed;
  top: 50%;
  left: 50%;

  .header {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${colors.gray};
  }
  .selected-sector {
    color: ${colors.gray};
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`