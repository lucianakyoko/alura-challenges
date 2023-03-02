import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const MessageScreenContainer = styled.div`
  background-color: ${colors.primary.black05};
`;

export const MessageScreenWrapper = styled.div`
  padding: 1.6rem;

  @media screen and (min-width: 767px) {
    padding: 3.2rem;
  }

  @media screen and (min-width: 900px) {
    width: 62rem;
    padding: 6.4rem 0;
    margin: auto;
  }

  h2 {
    color: ${colors.primary.black100};
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 2.6rem;
    text-transform: capitalize;
    
    
    @media screen and (min-width: 1000px) {
      font-size: 3.2rem;
      line-height: 3.8rem;
    }
  }
`;

export const MessagesListWrapper = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  border-radius: .4rem;
`;

export const NoMessagesText = styled.p`
  margin-top: 1.8rem;
  color: ${colors.secondary.orange80};
  font-size: 1.6rem;
`;