import React from "react";
import { useTheme } from "styled-components";

import {
  FrontContainer,
} from './style';

function FrontOfTicket({name, sector, ticket, entryType, eventDate, isDownloadMode}, ref) {
  const theme = useTheme();
  const logo = theme.logo;
  const logoIcon = theme.logoIcon;

  return(
    <FrontContainer ref={ref} className={isDownloadMode ? 'download-mode' : ' '}>
      <div className="logos">
        <img className="full" src={logo} alt="Logo CodeChella" />
        <img className="icon" src={logoIcon} alt="Ícone do Codechella" />
      </div>
      <div className="ticket_details">
        <div className="barcode"></div>
        <div className="datas">
          <h3 className="user-name">{name}</h3>
          <div className="infos">
            <div className="infos-a">
              <p className="info">Ingresso <span className="highlight">{ticket}</span></p>
              <p className="info">Entrada <span className="highlight">{entryType}</span></p>
              <p className="info">Setor <span className="highlight upper">{sector}</span></p>
            </div>

            <div className="infos-b">
              <p className="info">Data: <span className="highlight">{eventDate}</span></p>
              <p className="info">Local: <span className="highlight">São Paulo-SP</span></p>
              <p className="info">Abertura: <span className="highlight">16h</span></p>
            </div>
          </div>
        </div>
      </div>
    </FrontContainer>
  )
}

const ForwardedFrontOfTicket = React.forwardRef(FrontOfTicket);
export { ForwardedFrontOfTicket as FrontOfTicket };