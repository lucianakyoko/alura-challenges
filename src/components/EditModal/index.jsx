import { ModalUI } from "../UI/ModalUI";

import {
  EditModalContainer,
  EditModalForm,
  PriceAndCategoryWrapper,
  EditModalInputWrapper,
} from './style';

export function EditModal({closeModal}) {
  return(
    <ModalUI
      modalTitle="Editar produto"
      modalText="Edite os campos que deseja alterar e clique em salvar."
      btnTitle="Salvar"
      btnStyle="primary"
      onClickFunction={closeModal}
    >

      <EditModalContainer>
        <EditModalForm action="">
          <EditModalInputWrapper>
            <label htmlFor="url">URL da imagem</label>
            <input type="text" name="url" id="url"/>
          </EditModalInputWrapper>

          <PriceAndCategoryWrapper>
            <EditModalInputWrapper>
              <label htmlFor="category">Categoria</label>
              <input type="text" name="category" id="category" />
            </EditModalInputWrapper>

            <EditModalInputWrapper>
              <label htmlFor="price">Preço</label>
              <input type="number" name="price" id="price" />
            </EditModalInputWrapper>
          </PriceAndCategoryWrapper>

          <EditModalInputWrapper>
            <label htmlFor="product">Nome do produto</label>
            <input type="text" name="product" id="product" />
          </EditModalInputWrapper>


          <EditModalInputWrapper>
            <label htmlFor="description">Descrição do produto</label>
            <textarea name="description" id="description"></textarea>
          </EditModalInputWrapper>
        </EditModalForm>
      </EditModalContainer>

    </ModalUI>
  );
}