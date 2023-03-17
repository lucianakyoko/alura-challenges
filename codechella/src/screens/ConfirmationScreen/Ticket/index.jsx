import React, { useRef, useState } from "react";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { BackOfTicket } from "./BackOfTicket";
import { FrontOfTicket } from "./FrontOfTicket";

import {
  TicketWrapper
} from './style';

 function Ticket({ name, birthday, sector, ticket, entryType, eventDate, isDownloadMode, setIsDownloadMode}, ref ) {
  const RefFrontTicket = useRef(null);
  const RefBackTicket = useRef(null);

  const [active, setActive] = useState(false);
  const handleClick = () => setActive(!active);

  const selectClassName = (
      isDownloadMode && active ? 'download-mode' : 
      isDownloadMode && !active ? 'download-mode active' : 
      !isDownloadMode && active ? 'active' : ''
    );

  return(
    <TicketWrapper ref={ref} className={selectClassName}>
      <span 
        className="flip-button" 
        title='clique para girar o ingresso'
        onClick={handleClick}
      >
        <MdOutlineFlipCameraAndroid />
      </span>

      <FrontOfTicket
        ref={RefFrontTicket}
        isDownloadMode={isDownloadMode}
        name={name}
        sector={sector}
        ticket={ticket}
        entryType={entryType}
        eventDate={eventDate}
      />
      <BackOfTicket
        ref={RefBackTicket}
        isDownloadMode={isDownloadMode}
        name={name}
        birthday={birthday}
        sector={sector}
        entryType={entryType}
      />
    </TicketWrapper>
  )
}

const ForwardedTicket = React.forwardRef(Ticket);
export {ForwardedTicket as Ticket};