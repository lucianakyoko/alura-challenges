import { device } from "@/styles/devices";
import { backgroundImage } from "@/styles/mixin";
import styled from "styled-components";

export const XpItem = styled.li`
  padding: 3.2rem 2.4rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  ${device.tablet} {
    padding: 3.2rem 6rem;
  }

  ${device.laptop} {
    padding: 6.4rem 12.15rem;
    gap: 4.8rem;
    &:nth-child(odd) {
      flex-direction: row;
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }

  .title-text {
    ${device.laptop} {
      width: 100%;
    }

    .title {
      color: ${props => props.theme.text};
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 3.8rem;
      text-align: center;
    }
    .text {
      color: ${props => props.theme.text};
      font-size: 2rem;
      font-weight: 500;
      line-height: 4rem;
      text-align: center;

      ${device.laptop} {
        text-align: left;
      }
    }
  }
 `;

export const Image = styled.div`
  width: 100%;
  height: 40rem;

  border-radius: 1.6rem;
  background-image: url(${props => props.image});
  ${backgroundImage('normal', 'cover')}

  ${device.tablet} {
    background-position: 50% 22%;
  }
`;