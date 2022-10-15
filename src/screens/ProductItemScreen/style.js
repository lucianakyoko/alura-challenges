import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ProductItemScreenContainer = styled.div`
  background-color: ${colors.primary.black05};
`;

export const ProductItemScreenContentBox = styled.div`
  @media screen and (min-width: 1130px) {
    padding: 6.4rem;

    display: flex;
    flex-direction: column;
    gap: 6.4rem;
  }
`;

export const ProductItemContentWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 767px) {
    width: auto;
    padding: 3.2rem;

    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  @media screen and (min-width: 1130px) {
    padding: 0;
    margin: auto;
    max-width: 113.6rem;
  }
`;

export const ProductImageBox = styled.div`
  height: 19.2rem;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 767px) {
    min-width: 25.4rem;
    max-width: 25.4rem;
    height: 15.7rem;
    background-color: blue;
  }
  
  @media screen and (min-width: 1130px) {
    min-width: 56rem;
    max-width: 56rem;
    height: 40.3rem;
  }
`;

export const ProductItemDetailsWrapper = styled.div`
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: .8rem;

  h2 {
    color: ${colors.primary.black100};
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 2.6rem;
  }

  span {
    color: ${colors.primary.black100};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.9rem;
  }

  p {
    color: ${colors.primary.black100};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.6rem;
  }

  @media screen and (min-width: 1130px) {
    h2 {
      font-size: 5.2rem;
      line-height: 6.1rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
  }
`;
