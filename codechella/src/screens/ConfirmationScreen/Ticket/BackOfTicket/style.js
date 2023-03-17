import { device } from "@/styles/devices";
import styled from "styled-components";

export const BackContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3.2rem 0;
  background: ${props => props.theme.pageBackground};
  border-radius: .8rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  backface-visibility: hidden;
  transform: rotateY(180deg);
  position: absolute;

  ${device.laptop} {
    gap: 0;
  }

  .logos {
    padding: 0 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .full {
      width: 11.695rem;
    }

    .icon {
      width: 3.2rem;
    }
  }

  .ticket_details {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${device.tablet} {
      padding: 0 3.2rem;
      gap: 4rem;
    }

    ${device.laptop} {
      flex-direction: row;
      justify-content: center;
      gap: 0;
    }

    .map {
      width: 70%;
      padding: 0 .8rem;
       
      ${device.tablet} {
        width: 40rem;
      }

      ${device.laptop} {
        width: 80%;
      }
    }

    .datas {
      width: 100%;
      padding: 2.4rem;

      ${device.tablet} {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
      }

      ${device.laptop} {
        gap: 1rem;
      }

      .dont-forget {
        color: ${props => props.theme.text};
        font-size: 2rem;
        font-weight: 700;
        line-height: 4rem;
        text-align: center;
        
        ${device.tablet} {
          font-size: 2.4rem;          
        }
        
        ${device.laptop} {
          font-size: 2rem;          
        }
      }
 
      .warnings {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        .info {
          margin-left: 1.8rem;

          color: ${props => props.theme.text};
          font-size: 1.6rem;
          line-height: 3rem;
          position: relative;

          &::before {
            content: '';
            width: .8rem;
            height: .8rem;
            background-color: ${props => props.theme.pageBackgroundSecondary};
            position: absolute;
            top: 1.1rem;
            left: -1.6rem;
          }

          .highlight {
            font-weight: 700;
          }
        }
      }
    }
  }

  &.download-mode {
    position: static;
    
    backface-visibility: visible;
    transform: rotateY(0deg);
  }
`
