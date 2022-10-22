import { Header } from "../../components/Header";
import { MessageItem } from "./MessageItem";

import {
  MessageScreenContainer,
  MessageScreenWrapper,
  MessagesListWrapper,
} from './style';

const messages = [
  {
    id: 'message01',
    email: 'email01@email.com',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    read: false,
  },
  {
    id: 'message02',
    email: 'email02@email.com',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    read: false,
  },
  {
    id: 'message03',
    email: 'email03@email.com',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    read: false,
  },
  {
    id: 'message04',
    email: 'email04@email.com',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    read: false,
  },
  {
    id: 'message05',
    email: 'email05@email.com',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    read: false,
  },
  {
    id: 'message06',
    email: 'email06@email.com',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    read: false,
  },
  {
    id: 'message07',
    email: 'email07@email.com',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    read: false,
  },
  {
    id: 'message08',
    email: 'email08@email.com',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    read: false,
  },
  {
    id: 'message09',
    email: 'email09@email.com',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    read: false,
  },
  {
    id: 'message10',
    email: 'email10@email.com',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    read: true,
  },
];

const notReadMesseges = messages.filter(item => item.read === false);

const readMesseges = messages.filter(item => item.read === true);


export function MessageScreen() {
  return(
    <MessageScreenContainer>
      <Header />

      <MessageScreenWrapper>
        <h2>Mensagens (<span>{notReadMesseges.length}</span>)</h2>

        <MessagesListWrapper>
          {notReadMesseges.map(message => (
            <MessageItem 
              key={message.id}
              id={message.id}
              email={message.email}
              message={message.message}
              read={message.read}
            />
          ))}
        </MessagesListWrapper>
      </MessageScreenWrapper>

      <span></span>

      <MessageScreenWrapper>
        <h2>Mensagens lidas</h2>

        <MessagesListWrapper>
          {readMesseges.map(message => (
            <MessageItem 
              key={message.id}
              id={message.id}
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