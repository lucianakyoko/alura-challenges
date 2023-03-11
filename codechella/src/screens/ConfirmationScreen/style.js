import { device } from '@/styles/devices';
import { backgroundImage } from '@/styles/mixin';
import styled from 'styled-components';

export const ConfirmationContainer = styled.div`
  padding: 6.4rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  ${device.tablet} {
    padding: 6.4rem 6rem;
  }
  ${device.laptop} {
    padding: 6.4rem 12rem;
  }

  .title {
    color: ${props => props.theme.text};
    font-size: 3.2rem;
    font-weight:700;
    line-height: 3.8rem;
    text-align: center;

    ${device.laptop} {
      max-width: 79.2rem;
    }
  }
`;

export const TicketWrapper = styled.div`
  width: 100%;
  padding: 3.2rem;
  background: ${props => props.theme.pageBackground};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${device.laptop} {
    max-width: 79.2rem;
  }

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
            font-size: 2rem;
            font-weight: 400;
            line-height: 4rem;
            .highlight {
              font-weight: 700;
            }
          }
        }
        /* display: flex;
        flex-direction: column;
        align-items: center;
        ${device.laptop} {
          align-items: flex-start;
        }

        .info {
          color: ${props => props.theme.text};
          font-size: 2rem;
          font-weight: 400;
          line-height: 4rem;
          .highlight {
            font-weight: 700;
          }
        } */
      }
    }
  }
`;