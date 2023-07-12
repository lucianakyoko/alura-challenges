import { ModalTemplate } from "@/components/templates/ModalTemplate";

import {
  SubscribeModalContainer,
} from './styles';

export function SubscribeModal({handleModal}) {
  return (
    <ModalTemplate
      handleModal={handleModal}
      text='E-mail cadastrado com sucesso!'
    >
      <SubscribeModalContainer>
        <p className="message">Em breve você receberá novidades exclusivas da Meteora.</p>
        <div className="coupon">
          <p className="coupon-code">Cupon de desconto: <span className="code">METEORA10</span></p>
          <p className="info-message">Valide seu cupom antes de finalizar sua compra e ganhe 10% de desconto!</p>
        </div>
      </SubscribeModalContainer>
    </ModalTemplate>
  )
}