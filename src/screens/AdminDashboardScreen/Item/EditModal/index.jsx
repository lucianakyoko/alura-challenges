import { Button } from "../../../../components/Button";
import { ModalUI } from "../../../../components/UI/ModalUI";

import {
  EditModalContainer,
  EditModalFormWrapper,
  PriceAndCategoryWrapper,
  EditModalInputWrapper,
  EditModalBtnWrapper
} from './style';

export function EditModal(props) {
  const {
    img,
    productName,
    price,
    category,
    description,
    setOpenEditModal
  } = props;

  return(
    <ModalUI
      modalTitle='Editar produto'
      modalText='Edite os campos que deseja alterar e clique em salvar.'
    >
      <EditModalContainer>
        <EditModalFormWrapper action="">
          <EditModalInputWrapper>
            <label htmlFor="product">Nome do produto</label>
            <input 
              type="text" 
              name="product" 
              id="product" 
              // value={productName}
            />
          </EditModalInputWrapper>

          <EditModalInputWrapper>
            <label htmlFor="url">URL da imagem</label>
            <input 
            type="text" 
            name="url" 
            id="url" 
            // value={img}
          />
          </EditModalInputWrapper>

          <PriceAndCategoryWrapper>
            <EditModalInputWrapper>
              <label htmlFor="category">Categoria</label>
              <input 
                type="text" 
                name="category" 
                id="category" 
                // value={category} 
              />
            </EditModalInputWrapper>

            <EditModalInputWrapper>
              <label htmlFor="price">Preço</label>
              <input 
                type="text" 
                name="price" 
                id="price" 
                // value={price}
              />
            </EditModalInputWrapper>
          </PriceAndCategoryWrapper>

          <EditModalInputWrapper>
            <label htmlFor="description">Descrição do produto</label>
            <textarea 
              name="description" 
              id="description" 
              // value={description}
            ></textarea>
          </EditModalInputWrapper>
        </EditModalFormWrapper>

        <EditModalBtnWrapper>
          <Button 
            title="cancelar"
            btnStyle='secondary'
            padding='1.2rem 1.6rem'
            showBtn
            onClickFunction={() => setOpenEditModal(false)}
          />

          <Button 
            title='salvar'
            btnStyle='primary'
            showBtn
          />
        </EditModalBtnWrapper>
      </EditModalContainer>
    </ModalUI>
  )
}