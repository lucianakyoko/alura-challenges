import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { device } from '@/styles/devices';

export const SearchBarContainer = styled.div`
  display: ${props => props.mobile ? 'flex' : 'none'};
  align-items: center;
  gap: .82rem;

  ${device.tablet} {
    display: ${props => props.mobile ? 'none' : 'flex'};
  }

  .input-field {
    border: 1px solid ${
      props => props.mobile ? colors.primary.black : colors.primary.white      
    };
    padding:  .9rem 1.2rem;
    color: ${colors.primary.gray[150]};
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;

    ${device.tablet} {
      width: 14.5rem;
    }

    ${device.laptop} {
      width: 17rem;

      font-size: 1.5rem;
    }
  }
  
  .search-button {
    padding: .8rem 1.2rem;

    color: ${
      props => props.mobile ? colors.primary.black : colors.primary.white   
    };
    font-size: 1.6rem;
    font-weight:500;

    border: 1px solid ${
      props => props.mobile ? colors.primary.black : colors.primary.white
    };
    background-color: ${
      props => props.mobile ? colors.primary.white : colors.primary.black
    };

  }
`;