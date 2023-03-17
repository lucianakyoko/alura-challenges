import { device } from "@/styles/devices";
import { backgroundImage } from "@/styles/mixin";
import styled from "styled-components";

export const FrontContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3.2rem;
  background: ${props => props.theme.pageBackground};

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  border-radius: .8rem;

  .logos {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .full {
      max-width: 11.695rem;
    }
    .icon {
      max-width: 3.2rem;
    }
  }

  .ticket_details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    ${device.laptop} {
      flex-direction: row;
      justify-content: flex-start;
      gap: 4.8rem;
    }

    .barcode {
      width: 100%;
      height: 19rem;

      background-image: url('/qr-code.png');
      ${backgroundImage('normal', 'contain')};
      
      ${device.tablet} {
        height: 31rem;
      }
      ${device.laptop} {
        width: 18.9rem;
        height: 22.2rem;
        background-size: cover;
      }
    }
    .datas {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;

      ${device.laptop} {
        gap: 2.4rem;
        align-items: flex-start;
      }

      .user-name {
        color: ${props => props.theme.text};
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 3.8rem;

      }
      .infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.2rem;

        ${device.laptop} {
          flex-direction: row;
        }

        .infos-a, 
        .infos-b {
          display: flex;
          flex-direction: column;
          align-items: center;

          ${device.laptop} {
            align-items: flex-start;
          }

          .info {
            color: ${props => props.theme.text};
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 4rem;
            .highlight {
              font-weight: 700;
              &.upper {
                text-transform: uppercase;
              }
            }
          }
        }
      }
    }
  }

  &.download-mode {
    position: static;
    backface-visibility: visible;
    transform: none;
  }
`