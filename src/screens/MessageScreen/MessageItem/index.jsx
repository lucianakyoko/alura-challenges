import { useState } from "react";
import { MailIcon } from "../../../components/icons/MailIcon";
import { MailOpenedIcon } from "../../../components/icons/MailOpenedIcon";
import { MessageItemModal } from "./MessageItemModal";

import {
  MessageItemContainer,
  Email,
  Message,
} from './style';

export function MessageItem(props) {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  const {
    id,
    email,
    message,
    read,
  } = props;

  return(
    <MessageItemContainer 
      className={read ? 'read' : ''}
      onClick={() => setIsMessageModalOpen(true)}
    >
      <div>
        <span>{!read ? <MailIcon /> : <MailOpenedIcon />}</span>
        <Email>{email}</Email>
      </div>
      <Message>{message}</Message>

      { isMessageModalOpen &&
        <MessageItemModal 
          setIsMessageModalOpen={setIsMessageModalOpen}
          id={id}
          email={email}
          message={message}
          read={read}
        />
      }
    </MessageItemContainer>
  );
}