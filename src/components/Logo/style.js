import styled from "styled-components";

export const LogoContainer = styled.svg`
width: 10rem;
height: 2.8rem;

&.fixed-size {
  width: 17.6rem;
  height: 5rem;
}

@media screen and (min-width: 800px) {
  width: 17.6rem;
  height: 5rem;
}
`;