import { ModalTemplate } from "@/components/templates/ModalTemplate";

import {
  CheckoutModalContainer
} from './styles';

export function CheckoutModal({handleModal}) {
  return (
    <ModalTemplate
      text="Compra finalizada"
      handleModal={handleModal}
    >
      <CheckoutModalContainer>
        <p className="message">Compra finalizada com sucesso!</p>
      </CheckoutModalContainer>
    </ModalTemplate>
  );
}