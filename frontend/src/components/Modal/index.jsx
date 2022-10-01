import { Button } from '../Button';
import { 
  ModalContainer,
  ModalContent,
  ModalProductDetail,
  ModalProductImageContainer,
  ModalBtnWrapper,
} from './style';

export function Modal() {
  return (
    <ModalContainer>
      <ModalContent>
        <h2>Excluir produto</h2>
        <p>Tem certeza que deseja excluir o produto abaixo?</p>

        <ModalProductDetail>
          <ModalProductImageContainer></ModalProductImageContainer>
          <div>
            <h3>Nome do produto</h3>
            <span>R$60,00</span>
          </div>
        </ModalProductDetail>
        
        <ModalBtnWrapper>
          <Button 
            href='/produtos' 
            title='cancelar' 
            btnStyle='primary' 
            showBtn
            setModal={false}
          />
          <Button title='Sim, excluir' btnStyle='danger' showBtn/>
        </ModalBtnWrapper>
        
      </ModalContent>
    </ModalContainer>
  );
}