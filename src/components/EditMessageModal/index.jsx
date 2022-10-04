import { ModalUI } from "../UI/ModalUI";

import { 
  EditMessageModalContainer,
  ImageAndDetailWrapper,
  ProductImageWrapper,
  DetailWrapper,
  DescriptionWrapper,
} from './style';

export function EditMessageModal() {
  return(
    <ModalUI
      modalTitle="Editar produto"
      modalText="Editar o produto abaixo?"
      btnTitle="Sim, editar"
      btnStyle="primary"
    >
      <EditMessageModalContainer>
        <ImageAndDetailWrapper>
          <ProductImageWrapper></ProductImageWrapper>
          <DetailWrapper>
            <h3>Nome do produto gande </h3>
            <h4>Categoria</h4>
            <span>R$60,00</span>
          </DetailWrapper>
        </ImageAndDetailWrapper>

        <DescriptionWrapper>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quidem error nihil ipsum, quibusdam at, vitae vero esse non facere deleniti tempora rem, eos cupiditate.
          </p>
        </DescriptionWrapper>
      </EditMessageModalContainer>
    </ModalUI>
  )
}