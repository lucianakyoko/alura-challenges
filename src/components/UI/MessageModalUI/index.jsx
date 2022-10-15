import { 
  MessagemModalUIContainer,
  MessagemModalUIContentWrapper,
  MessageModalUIContentHeader,
  MessagemModalUIContentP,
} from './style';

export function MessageModalUI({children, color, title, message}) {
  return(
    <MessagemModalUIContainer>
      <MessagemModalUIContentWrapper>
        <MessageModalUIContentHeader color={color}>
          <h3>{title}</h3>
          <MessagemModalUIContentP>{message}</MessagemModalUIContentP>
        </MessageModalUIContentHeader>
        {children}
      </MessagemModalUIContentWrapper>
    </MessagemModalUIContainer>
  )
}