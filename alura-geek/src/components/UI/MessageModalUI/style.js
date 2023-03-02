import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const MessagemModalUIContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.8);

  position: fixed;
  top: 0;
  left: 0;
`;

export const MessagemModalUIContentWrapper = styled.div`
  width: 90%;
  max-width: 32rem;
  padding: 2.4rem 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  background-color: ${colors.primary.white100};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MessageModalUIContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  
  color: ${props => props.color === 'success' ? `${colors.secondary.green80}`: `${colors.secondary.red80}`};

  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
  }

  p {
    font-size: 1.6rem;
  }
`;

export const MessagemModalUIContentP = styled.p`
  
`;

