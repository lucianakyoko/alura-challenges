import { device } from "@/styles/devices";
import { backgroundImage } from "@/styles/mixin";
import styled from "styled-components";

export const Detail = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  ${device.laptop} {
    width: 38.3rem;
    
    &:nth-child(odd) {
      align-self: start;
      margin-bottom: 10.6rem;
    }
    &:nth-child(even) {
      align-self: flex-end;
    }
  }
  
  .item_title {
    color: ${props => props.theme.text};
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 3.75rem;
    
    ${device.tablet} {
      line-height: 3.8rem;
    }
  }

  .item_text {
    color: ${props => props.theme.text};
    font-size: 2rem;
    font-weight: 500;
    line-height: 4rem;
    text-align: center;
  }
`;

export const DetailImage = styled.div`
  width: 100%;
  height: 24rem;
  
  background-image: url(${props => props.image});
  ${backgroundImage('normal', 'cover')};
  border-radius: 1.6rem;

  ${device.tablet} {
    max-width: 38.24rem;
  }
  ${device.laptop} {
    height: 23.9rem;
  }
`;