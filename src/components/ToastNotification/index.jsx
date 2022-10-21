import { CloseIcon } from "../icons/CloseIcon";

import {
  ToastNotificationContainer,
  ToastNotificationMessageWrapper,
  ToastNotificationButtonWrapper,
} from './style';

export function ToastNotification({ toastIsOpen, setToastIsOpen }) {
  const handleClose = () => setToastIsOpen(false);

  return(
    <>
      {  
        <ToastNotificationContainer className={toastIsOpen ? 'toast-opened' : ''}>
          <ToastNotificationMessageWrapper>
            <h4>Olá!</h4>
            <p>Login realizado com sucesso!</p>
          </ToastNotificationMessageWrapper>
          <ToastNotificationButtonWrapper onClick={handleClose}>
            <CloseIcon />
          </ToastNotificationButtonWrapper>
        </ToastNotificationContainer>
      }
    </>
  );
}