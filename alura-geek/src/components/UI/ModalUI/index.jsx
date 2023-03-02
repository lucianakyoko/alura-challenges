import { Button } from "../../Button";

import {
  ModalContainer,
  ModalContent,
  ModalProductDetail
} from './style';

export function ModalUI(props) {
  const {
    children,
    modalTitle,
    modalText,
  } = props;

  return(
    <ModalContainer>
      <ModalContent>
        <h2>{modalTitle}</h2>
        <p>{modalText}</p>

        <ModalProductDetail>
          { children }
        </ModalProductDetail>
      </ModalContent>
    </ModalContainer>
  );
}