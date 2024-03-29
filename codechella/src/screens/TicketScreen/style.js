import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import styled from "styled-components";

export const TitleFormWrapper = styled.div`
  padding: 3.2rem 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  ${device.tablet} {
    padding: 4.8rem 6rem;
  }

  ${device.laptop} {
    padding: 4.8rem 12rem;
  }

  .title {
    color: ${props => props.theme.text};
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 4.16rem;
    text-align: center;

    ${device.tablet} {
      font-size: 4.8rem;
      line-height: 6.24rem;
    }
  }

  .form-wrapper {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    ${device.laptop} {
      max-width: 79.5rem;
      margin: 0 auto;
    }

    .form {
      width: 100%;
    
      display: flex;
      flex-direction: column;
      gap: 3.2rem;

      .actions {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 1.6rem;
        
        ${device.mobileL} {
          flex-direction: row;
        }
        ${device.tablet} {
          width: 40rem;
          margin: 0 auto;
          gap: 4.8rem;
        }
  
        .button {
          width: 100%;
          padding: .8rem 1.6rem;
    
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.6rem;
    
          border-radius: 1.6rem;
          border: none;
          background-color: ${props => props.theme.button};
          box-shadow: ${colors.boxShadow};
    
          transition: all .4s;
          &:hover {
            cursor: pointer;
            background-color: ${props => props.theme.buttonHover};
          }
          
          &.disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
          &.secondary {
            .text {
              color: ${colors.gray};
            }
            background-color: ${props => props.theme.secondaryButton};
            &:hover {
              background-color: ${props => props.theme.secondaryButtonHover};
            }
          }
    
          .text {
            color: ${colors.white};
            font-size: 2rem;
            font-weight: 700;
            line-height: 4rem;
          }
          .icon {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;