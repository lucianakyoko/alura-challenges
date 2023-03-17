import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import html2canvas from 'html2canvas';
import { MdDownload } from 'react-icons/md';
import Confetti from 'react-confetti';
import { PageLayout } from "@/components/PageLayout";

import {
  ConfirmationContainer,
  TicketWrapper
} from './style';
import { useEffect, useRef, useState } from "react";

export function ConfirmationScreen() {
  const ticketWrapper = useRef(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const router = useRouter();
  const { name, sector, ticket, entryType, eventDate } = router.query;

  const theme = useTheme();
  const logo = theme.logo;
  const logoIcon = theme.logoIcon;

  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(true);
    }, 0);
  }, []);

  useEffect(() => {
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(confettiTimer);
  }, [showConfetti]);
  
  const saveTicketImage = () => {
    html2canvas(ticketWrapper.current).then(function(canvas) {
      const ticketImg = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = ticketImg;
      downloadLink.download = 'meu_ingresso_codechella.png';
      downloadLink.click();
    });
  }
  return(
    <PageLayout 
      pageTitle='Seu ingresso | CodeChella'
      page='confirmation'
      heroText='Seu ingresso está aqui!'
    >
      <ConfirmationContainer>
        <h2 className="title">Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>

        <TicketWrapper ref={ticketWrapper} id="ticket-wrapper">
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
        </TicketWrapper>

        <button 
          type="button" 
          title="faça o download do seu ingresso!" 
          className="download-btn"
          onClick={saveTicketImage}
        >
          <span className="text">Baixar ingresso!</span>
          <MdDownload color="white" className="icon"/>
        </button>
      </ConfirmationContainer>
      {showConfetti && <Confetti />}
    </PageLayout>
  );
}