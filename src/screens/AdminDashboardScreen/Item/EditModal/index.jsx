import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../../../../components/Button";
import { MessageModalUI } from "../../../../components/UI/MessageModalUI";
import { ModalUI } from "../../../../components/UI/ModalUI";
import { Loader } from '../../../../components/Loader';

import {
  EditModalContainer,
  EditModalFormWrapper,
  PriceAndCategoryWrapper,
  EditModalInputWrapper,
  InputErrMsg,
  EditModalBtnWrapper
} from './style';

export function EditModal(props) {
  const router = useRouter();
  const {
    id,
    img,
    productName,
    price,
    category,
    description,
    setOpenEditModal
  } = props;

  const [successEdit, setSuccessEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errEdit, setErrEdit] = useState(false);
  const [editUrl, setEditUrl] = useState(img);
  const [editCategory, setEditCategory] = useState(category);
  const [editPrice, setEditPrice] = useState(price);
  const [editProduct, setEditProduct] = useState(productName);
  const [editDescription, setEditDescription] = useState(description);

  const handleEditProduct = async () => {
    if(!editUrl || !editProduct || !editPrice || !editCategory || !editDescription){
      setErrEdit(true);

    } else {
      setLoading(true);
      await fetch(`/api/produtos/${id}`, {
        method: 'Put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imgSrc: editUrl,
          title: editProduct,
          price: editPrice,
          category: editCategory,
          descrition: editDescription
        })
      });

      setLoading(false);
      setSuccessEdit(true);
      router.push('/dashboard');
    }
  }

  return(
    <ModalUI
      modalTitle='Editar produto'
      modalText='Edite os campos que deseja alterar e clique em salvar.'
    >
      <EditModalContainer>
        <EditModalFormWrapper>
          <EditModalInputWrapper>
            <label htmlFor="product">Nome do produto</label>
            <input 
              type="text" 
              name="product" 
              id="product" 
              value={editProduct}
              onChange={(e) => setEditProduct(e.target.value)}
            />
            { !editProduct && 
              <InputErrMsg>*Insira o nome do produto</InputErrMsg>
            }
          </EditModalInputWrapper>

          <EditModalInputWrapper>
            <label htmlFor="url">URL da imagem</label>
            <input 
            type="text" 
            name="url" 
            id="url" 
            value={editUrl}
            onChange={(e) => setEditUrl(e.target.value)}
          />
            { !editUrl && 
              <InputErrMsg>*Insira o Link da imagem.</InputErrMsg>
            }
          </EditModalInputWrapper>

          <PriceAndCategoryWrapper>
            <EditModalInputWrapper>
              <label htmlFor="category">Categoria</label>
              <input 
                type="text" 
                name="category" 
                id="category" 
                value={editCategory} 
                onChange={(e) => setEditCategory(e.target.value)}
              />
              { !editCategory && 
                <InputErrMsg>*Insira a categoria.</InputErrMsg>
              }
            </EditModalInputWrapper>

            <EditModalInputWrapper>
              <label htmlFor="price">Preço</label>
              <input 
                type="text" 
                name="price" 
                id="price" 
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
              />
              { !editPrice && 
                <InputErrMsg>*Insira o preço.</InputErrMsg>
              }
            </EditModalInputWrapper>
          </PriceAndCategoryWrapper>

          <EditModalInputWrapper>
            <label htmlFor="descrition">Descrição do produto</label>
            <textarea 
              name="descrition" 
              id="descrition" 
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            ></textarea>
            { !editDescription && 
              <InputErrMsg>*Insira a descrição do produto.</InputErrMsg>
            }
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
            onClickFunction={handleEditProduct}
          />
        </EditModalBtnWrapper>
      </EditModalContainer>

      {
        successEdit &&
          <MessageModalUI 
            color='success'
            title='Sucesso!'
            message='Produto editado com sucesso!'
          >
            <Button 
              showBtn
              btnStyle='primary'
              width='100%'
              title='Ok'
              onClickFunction={() => {
                setSuccessEdit(false);
                setOpenEditModal(false);
              }}
            />
          </MessageModalUI>
      }

      {
        errEdit && 
        <MessageModalUI 
          title='Erro!'
          message='Ops! Algo deu errado. Tente novamente.'
        >
          <Button 
            showBtn
            btnStyle='primary'
            width='100%'
            title='Ok'
            onClickFunction={() => setErrEdit(false)}
          />
        </MessageModalUI>
      }

      {loading && <Loader />}
    </ModalUI>
  )
}