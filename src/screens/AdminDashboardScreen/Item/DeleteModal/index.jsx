import { Button } from '../../../../components/Button';
import { ModalUI } from '../../../../components/UI/ModalUI';

import {
  DeleteModalInnerContainer,
  DeleteModalContentWrapper,
  DeleteModalImageWrapper,
  DeleteModalTitleAndPriceWrapper,
  DeleteModalBtnWrapper,
} from './style';

export function DeleteModal(props) {
  const {    
    img,
    productName,
    price,
    setOpenDeleteModel
  } = props;

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
          />
        </DeleteModalBtnWrapper>
      </DeleteModalInnerContainer>
    </ModalUI>
  )
}