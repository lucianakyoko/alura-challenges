import styled from "styled-components";
import { colors } from "../../styles/colors";

export const AdminDashboardScreenContainer = styled.div`
  background-color: ${colors.primary.black05};
`;

export const AdminDashboardContentWrapper = styled.div`
  padding: 1.6rem;

  @media screen and (min-width: 767px) {
    padding: 3.2rem;
  }

  @media screen and (min-width: 1130px) {
    padding: 6.4rem 0;
    max-width: 113.6rem;
    margin: auto;
  }
`;

export const AdminDashboardTitleAndBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h3 {
    color: ${colors.primary.black100};
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 2.6rem;
  }
  
  @media screen and (min-width: 767px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;