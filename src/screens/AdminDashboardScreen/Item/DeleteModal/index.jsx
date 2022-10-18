import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../../../../components/Button';
import { MessageModalUI } from '../../../../components/UI/MessageModalUI';
import { ModalUI } from '../../../../components/UI/ModalUI';

import {
  DeleteModalInnerContainer,
  DeleteModalContentWrapper,
  DeleteModalImageWrapper,
  DeleteModalTitleAndPriceWrapper,
  DeleteModalBtnWrapper,
  DeleteModalErrorMessage
} from './style';
import { Loader } from '../../../../components/Loader';

export function DeleteModal(props) {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    id,    
    img,
    productName,
    price,
    setOpenDeleteModel
  } = props;

  const handleDelete = async () => {
    setLoading(true)
    
    try {
      await fetch(`/api/produtos/${id}`, {
        method: 'Delete',
      })
      
    } catch (error) {
      setMessage('Não foi possível deletar o produto')
    }

    setLoading(false);
    setDeleteSuccess(true);
    router.push('/dashboard');
  }
  return(
    <ModalUI
      modalTitle='Excluir produto'
      modalText='Tem certeza que deseja excluir o produto abaixo?'
    >
      <DeleteModalInnerContainer>
        <DeleteModalContentWrapper>
          <DeleteModalImageWrapper imgSrc={img}></DeleteModalImageWrapper>
          <DeleteModalTitleAndPriceWrapper>
            <h3>{productName}</h3>
            <span>R$ {price}</span>
          </DeleteModalTitleAndPriceWrapper>

        </DeleteModalContentWrapper>
          {message && <DeleteModalErrorMessage>{message}</DeleteModalErrorMessage>}
        <DeleteModalBtnWrapper>
          <Button 
            title="cancelar"
            btnStyle='secondary'
            padding='1.2rem 1.6rem'
            showBtn
            onClickFunction={() => setOpenDeleteModel(false)}
          />
          <Button 
            title='Sim, excluir'
            btnStyle='danger'
            showBtn
            onClickFunction={handleDelete}
          />
        </DeleteModalBtnWrapper>
      </DeleteModalInnerContainer>

      {
        deleteSuccess && 
          <MessageModalUI 
            color='success'
            title='Sucesso!'
            message='Produto excluido com sucesso!'
          >
            <Button 
              showBtn
              btnStyle='primary'
              width='100%'
              title='Ok'
              onClickFunction={() => {
                setDeleteSuccess(false);
                setOpenDeleteModel(false);
              }}
            />
          </MessageModalUI>
      }

      { loading && <Loader />}
    </ModalUI>
  )
}