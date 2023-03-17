import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import html2canvas from 'html2canvas';
import { MdDownload } from 'react-icons/md';
import Confetti from 'react-confetti';
import { PageLayout } from "@/components/PageLayout";
import { Ticket } from "./Ticket";

import {
  Container,
} from './style';

export function ConfirmationScreen() {
  const [isDownloadMode, setIsDownloadMode] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const ticketWrapper = useRef(null);
  const router = useRouter();
  const { 
    name,
    birthday,
    sector, 
    ticket, 
    entryType, 
    eventDate 
  } = router.query;

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
    setIsDownloadMode(true);
    setTimeout(() => {
      html2canvas(ticketWrapper.current).then(function(canvas) {
        const ticketImg = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = ticketImg;
        downloadLink.download = 'meu_ingresso_codechella.png';
        downloadLink.click();
      });
    }, 500);
  }
  return(
    <PageLayout
      pageTitle='Seu ingresso | CodeChella'
      page='confirmation'
      heroText='Seu ingresso está aqui!'
    >

      <Container className={isDownloadMode ? 'download-mode' : ''}>
        <h2 className="title">Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
        <Ticket
          isDownloadMode={isDownloadMode}
          name={name}
          birthday={birthday}
          sector={sector}
          ticket={ticket}
          entryType={entryType}
          eventDate={eventDate}
          ref={ticketWrapper}
        />

        <button 
          type="button" 
          title="faça o download do seu ingresso!" 
          className="download-btn"
          onClick={saveTicketImage}
        >
          <span className="text">Baixar ingresso!</span>
          <MdDownload color="white" className="icon"/>
        </button>
      </Container>

      {showConfetti && <Confetti />}
    </PageLayout>
  );
}