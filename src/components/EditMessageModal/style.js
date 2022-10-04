import styled from "styled-components";
import { colors } from "../../styles/colors";

export const EditMessageModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  @media screen and (min-width: 767px) {
    align-items: flex-start;
  }
`;

export const ImageAndDetailWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const ProductImageWrapper = styled.div`
  width: 12rem;
  height: 8rem;

  background-color: yellowgreen;

  @media screen and (min-width: 767px) {
    width: 20rem;
    height: 12rem;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:  .8rem;

  h3 {
    color: ${colors.primary.black100};
    font-size: 1.6rem;
  }

  h4 {
    color: ${colors.primary.black100};
    font-size: 1.2rem;
  }

  span {
    color: ${colors.primary.black50};
    font-size: 1.6rem;
  }
`;

export const DescriptionWrapper = styled.div`
  p {
    font-size: 1.4rem;
    text-align: left;
    line-height: 1.8rem;
  }

  @media screen and (min-width: 767px) {
    p {
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }
`;