import { ModalTemplate } from "@/components/templates/ModalTemplate";
import { useState } from "react";

export function CheckoutModal({handleModal}) {
  return (
    <ModalTemplate
      text="Compra finalizada"
      handleModal={handleModal}
    >
      <p>Compra finalizada com sucesso!</p>
    </ModalTemplate>
  );
}