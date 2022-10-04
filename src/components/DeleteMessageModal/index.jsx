import { ModalUI } from "../UI/ModalUI";

import {
  DeleteModalContainer,
  ModalProductImageContainer,
  DeleteModalContentWrapper,
} from './style';

export function DeleteMessageModal() {
  return(
    <ModalUI
      modalTitle="Excluir produto"
      modalText="Tem certeza que deseja excluir o produto abaixo?"
      btnTitle="Sim, excluir"
      btnStyle="danger"
    >
      <DeleteModalContainer>
        <ModalProductImageContainer></ModalProductImageContainer>
        <DeleteModalContentWrapper>
          <h3>Nome do produto</h3>
          <span>R$60,00</span>
        </DeleteModalContentWrapper>
      </DeleteModalContainer>
    </ModalUI>
  )
}