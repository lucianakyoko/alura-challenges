import styled from "styled-components";
import { colors } from "../../styles/colors";

export const AllProductsContainer = styled.ul`
  margin-top: 1.6rem;
  padding: 1.6rem;
  
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;

  @media screen and (min-width: 767px) {
    padding: 3.2rem;
  }

  @media screen and (min-width: 1130px) {
    padding: 6.4rem 0;
    max-width: 113.6rem;
    margin: auto;
  }
`;