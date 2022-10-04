import { Button } from "../../Button";

import {
  ModalContainer,
  ModalContent,
  ModalProductDetail,
  ModalBtnWrapper
} from './style';

export function ModalUI(props) {
  const {
    children,
    modalTitle,
    modalText,
    btnTitle,
    btnStyle,
  } = props;

  return(
    <ModalContainer>
      <ModalContent>
        <h2>{modalTitle}</h2>
        <p>{modalText}</p>

        <ModalProductDetail>
          { children }
        </ModalProductDetail>

        <ModalBtnWrapper>
          <Button 
            href='/produtos' 
            title="cancelar"
            btnStyle='secondary'
            padding='1.2rem 1.6rem'
            showBtn
          />
          <Button 
            title={btnTitle}
            btnStyle={btnStyle}
            showBtn
          />
        </ModalBtnWrapper>
      </ModalContent>
    </ModalContainer>
  );
}