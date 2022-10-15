import { Button } from '../../../../components/Button';
import { ModalUI } from '../../../../components/UI/ModalUI';
import { useRouter } from 'next/router';

import {
  DeleteModalInnerContainer,
  DeleteModalContentWrapper,
  DeleteModalImageWrapper,
  DeleteModalTitleAndPriceWrapper,
  DeleteModalBtnWrapper,
  DeleteModalErrorMessage
} from './style';
import { useState } from 'react';
import { MessageModalUI } from '../../../../components/UI/MessageModalUI';

export function DeleteModal(props) {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [deleteSuccessMsg, setDeleteSuccessMsg] = useState(false);

  const {
    id,    
    img,
    productName,
    price,
    setOpenDeleteModel
  } = props;

  const handleDelete = async () => {
    try {
      await fetch(`/api/produtos/${id}`, {
        method: 'Delete',
      })
      
    } catch (error) {
      setMessage('Não foi possível deletar o produto')
    }
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
    </ModalUI>
  )
}