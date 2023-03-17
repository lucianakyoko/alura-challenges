import React from "react";
import { useTheme } from "styled-components";
import { SelectedSectionMap } from './ConfirmationMap';

import {
  BackContainer,
} from './style';

function BackOfTicket({name, birthday, sector, entryType, isDownloadMode}, ref) {
  const theme = useTheme();
  const logo = theme.logo;
  const logoIcon = theme.logoIcon;

  const userBirthday = new Date(birthday);
  const currentDay = new Date();
  let userAge = currentDay.getFullYear() - userBirthday.getFullYear();

  const isTeenager = userAge >= 13 && userAge <= 15;
  const isEntryType = entryType === 'Meia entrada';
  const isTeenagerAndEntryType = isTeenager || isEntryType;

  return(
    <BackContainer ref={ref} className={isDownloadMode ? 'download-mode' : ' '}>
      <div className="logos">
        <img className="full" src={logo} alt="Logo CodeChella" />
        <img className="icon" src={logoIcon} alt="Ícone do Codechella" />
      </div>
      <div className="ticket_details">
        <div className="map">
          <SelectedSectionMap sector={sector}/>

        </div>
        <div className="datas">
          <h3 className="dont-forget">Não se esqueça, <span>{name}</span>!</h3>
          <div className="warnings">
            {isTeenager &&
              <p className="info">Você possui <span className="highlight">{userAge}</span> anos. Portanto, é <span className="highlight">obrigatório</span> estar acompanhado dos pais ou responsáveis legais.</p>
            }
            {isEntryType &&
              <p className="info">Como você optou pela <span className="highlight">Meia entrada</span> é necessário apresentar um documento comprobatório.</p>
            }
            {!isTeenagerAndEntryType ?
              <p className="info"><span className="highlight">É proibido entrar com: </span>garrafas, latas, bebidas, armas de fogo e armas brancas, objetos pontiagudos, cortantes e/ou perfurantes, fogos de artifício, substâncias inflamáveis, corrosivas e ou tóxicas.</p>
              :
              null
            }
          </div>
        </div>
      </div>
    </BackContainer>
  )
}

const ForwardedBackOfTicket = React.forwardRef(BackOfTicket);
export { ForwardedBackOfTicket as BackOfTicket}