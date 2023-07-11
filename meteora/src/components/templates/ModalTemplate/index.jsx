import { BsCheckCircle, BsXLg } from "react-icons/bs";

import {
  ModalBackground,
  ModalTemplateContainer
} from './styles';

export function ModalTemplate({children, handleModal, text}) {
  return (
    <ModalBackground>
      <ModalTemplateContainer>
        <header className="modal-header">
          <div className="icon-text-wrapper">
            <span className="icon"><BsCheckCircle /></span>
            <p className="text">{text}</p>
          </div>
          <span onClick={handleModal} className="close-button"><BsXLg /></span>
        </header>

        <div className="modal-content">{children}</div>
      </ModalTemplateContainer>
    </ModalBackground>
  );
}