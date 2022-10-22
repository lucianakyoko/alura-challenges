import { Header } from "../../components/Header";
import { MessageItem } from "./MessageItem";

import {
  MessageScreenContainer,
  MessageScreenWrapper,
  MessagesListWrapper,
  NoMessagesText,
} from './style';


export function MessageScreen({messages}) {
  const notReadMesseges = messages.filter(item => item.read === false);
  const readMesseges = messages.filter(item => item.read === true);

  return(
    <MessageScreenContainer>
      <Header 
        btnShow
        btnStyle='secondary'
        btnTitle='Area Administrativa'
        btnHref='/dashboard'
        padding='1rem 1.6rem'
      />

      <MessageScreenWrapper>
        <h2>Mensagens (<span>{notReadMesseges.length}</span>)</h2>

        { notReadMesseges.length > 0 ? 
          <MessagesListWrapper>
            {notReadMesseges.map(message => (
              <MessageItem 
                key={message._id}
                id={message._id}
                email={message.email}
                message={message.message}
                read={message.read}
              />
            ))}
          </MessagesListWrapper> :
          <NoMessagesText>Você não possui nenhuma mensagem. </NoMessagesText>
      }
      </MessageScreenWrapper>

      <span></span>

      <MessageScreenWrapper>
        <h2>Mensagens lidas</h2>

        <MessagesListWrapper>
          {readMesseges.map(message => (
            <MessageItem 
              key={message._id}
              id={message._id}
              email={message.email}
              message={message.message}
              read={message.read}
            />
          ))}
        </MessagesListWrapper>

      </MessageScreenWrapper>
    </MessageScreenContainer>
  )

}