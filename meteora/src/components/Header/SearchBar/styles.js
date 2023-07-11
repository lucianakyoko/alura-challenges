import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import { textNormal } from "@/styles/typography";

export const SearchBarContainer = styled.div`
  display: ${props => props.mobile ? 'flex' : 'none'};
  
  ${device.tablet} {
    display: ${props => props.mobile ? 'none' : 'flex'};
  }

  .input-field{
    display: flex;
    align-items: center;
    gap: .82rem;

    .input {
      border: 1px solid ${
        props => props.mobile ? colors.black : colors.white
      };
      padding: .9rem 1.2rem;
  
      ${textNormal('', 1.3, 2)};
  
      ${device.laptop} {
        width: 17rem;
        font-size: 1.5rem;
      }
    }
  
    .search-button {
      padding: .8rem 1.2rem;
      color: ${props => props.mobile ? colors.black : colors.white};
      font-size: 1.6rem;
      font-weight: 500;
  
      border: 1px solid ${props => props.mobile ? colors.black : colors.white};
      background-color: ${props => props.mobile ? colors.white : colors.black};
    }
  }

  .search-result {
    width: 90%;
    padding: 1.6rem;
    background-color: ${colors.white};

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    position: absolute;
    top: 16rem;

    z-index: 2;

    ${device.tablet} {
      top: 5.2rem;
    }
  }
`;