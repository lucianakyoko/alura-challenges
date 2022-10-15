import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const DeleteModalInnerContainer = styled.div`
  background-color: ${colors.primary.white100};
  
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
`;

export const DeleteModalContentWrapper = styled.div`
  width: 100%;
  padding: 1.2rem;
  background-color: ${colors.primary.black05};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .8rem;

  @media screen and (min-width: 767px) {
    padding: 1.8rem;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
  }
`;

export const DeleteModalImageWrapper = styled.div`
  width: 12rem;
  height: 8rem;

  background-image: url(${props => props.imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 767px) {
    width: 20rem;
    height: 12rem;
  }
`;

export const DeleteModalTitleAndPriceWrapper = styled.div`
   h3 {
    color: ${colors.primary.black100};
    font-size: 1.6rem;
  }

  span {
    color: ${colors.primary.black50};
    font-size: 1.6rem;
  }
`;

export const DeleteModalBtnWrapper = styled.div`
  border-color: ${colors.primary.white100};
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

export const DeleteModalErrorMessage = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${colors.secondary.red80};
`;
