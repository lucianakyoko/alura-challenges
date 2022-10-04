import styled from "styled-components";
import { colors } from '../../styles/colors';

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .8rem;

  div {
    width: 15.6rem;
    height: 17.4rem;

    background-image: url(${props => props.imgSrc});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    position: relative;
  }

  h3 {
    color: ${colors.primary.black100};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.6rem;
  }
  
  span {
    color: ${colors.primary.black100};
    font-size: 1.6rem;
    font-weight: 700;

  }
  a {
    display: block;
    color: ${colors.secondary.blue100};
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.6rem;
    text-decoration: none;
  }

  @media screen and (min-width: 767px) {
    div {
      width: 16.4rem;
    }
  }
  
  @media screen and (min-width: 1130px) {
    div {
      width: 17.6rem;
    }
  }
`;

export const ProductItemDeleteAndEditBtnWrapper = styled.span`
  position: absolute;
  top: .8rem;
  right: .8rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

`;