import { Button } from "../../../../components/Button";
import { DeleteIcon } from '../../../../components/icons/DeleteIcon';
import { ModalUI } from "../../../../components/UI/ModalUI";

import {
  ModalMessageWrapper,
} from './style';

export function MessageItemModal(props) {
  const {
    id,
    email,
    message,
    read,
    setIsMessageModalOpen,
  } = props;

  return(
    <ModalUI
      modalTitle='Mensagem de:'
      modalText={email}
    >
      <ModalMessageWrapper>
        <p>{message}</p>
        <div>
          {!read ? 
            <Button 
              showBtn
              btnStyle='primary'
              title='Ok, lido'
            /> :
            <Button 
              showBtn
              btnStyle='primary'
              title='Marcar como não lido'
          />
          }
          <span>
            <DeleteIcon />
            deletar
          </span>
        </div>
      </ModalMessageWrapper>
    </ModalUI>
  )
}