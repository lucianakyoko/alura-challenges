import { useTheme } from "styled-components";
import { PageLayout } from "@/components/PageLayout";

import {
  ConfirmationContainer,
  TicketWrapper
} from './style';

export function ConfirmationScreen() {
  const theme = useTheme();
  const logo = theme.logo;
  const logoIcon = theme.logoIcon;

  return(
    <PageLayout 
      pageTitle='Seu ingresso | CodeChella'
      page='confirmation'
      heroText='Seu ingresso está aqui!'
    >
      <ConfirmationContainer>
        <h2 className="title">Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>

        <TicketWrapper>
          <div className="logos">
            <img className="full" src={logo} alt="Logo CodeChella" />
            <img className="icon" src={logoIcon} alt="Ícone do Codechella" />
          </div>
          <div className="ticket_details">
            <div className="barcode" bgImage="/qr-code.png"></div>
            <div className="datas">
              <h3 className="user-name">Moni Hillman</h3>
              <div className="infos">
                <p className="info">Ingresso <span className="highlight"> Cortesia</span></p>
                <p className="info">Setor <span className="highlight">Pista</span></p>
                <p className="info">Data: <span className="highlight">11/03</span></p>
                <p className="info">Local: <span className="highlight">São Paulo</span></p>
              </div>
            </div>
          </div>
        </TicketWrapper>
      </ConfirmationContainer>


    </PageLayout>
  );
}