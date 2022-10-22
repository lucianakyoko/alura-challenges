import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "../../../../components/Button";
import { DeleteIcon } from '../../../../components/icons/DeleteIcon';
import { Loader } from "../../../../components/Loader";
import { ModalUI } from "../../../../components/UI/ModalUI";

import {
  ModalMessageWrapper,
} from './style';

export function MessageItemModal(props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    id,
    email,
    message,
    read,
    setIsMessageModalOpen,
  } = props;

  const handleMarkAsReadBtn = async () => {
    setLoading(true);
    
    await fetch(`/api/messages/${id}`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        read: true,
      })
    });

    setLoading(false);
    setIsMessageModalOpen(false);
    router.push('/dashboard/mensagens');
  };

  const handleMarkAsNotReadBtn = async () => {
    setLoading(true);

    await fetch(`/api/messages/${id}`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        read: false,
      })
    });

    setLoading(false);
    setIsMessageModalOpen(false);
    router.push('/dashboard/mensagens')
  };

  const handleDeleteBtn = async () => {
    setLoading(true);
    
    await fetch(`/api/messages/${id}`, {
      method: 'Delete'
    })

    setLoading(false);
    setIsMessageModalOpen(false);
    router.push('/dashboard/mensagens')
  };

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
              onClickFunction={handleMarkAsReadBtn}
            /> :
            <Button 
              showBtn
              btnStyle='primary'
              title='Marcar como não lido'
              onClickFunction={handleMarkAsNotReadBtn}
          />
          }
          <span onClick={handleDeleteBtn}>
            <DeleteIcon />
            deletar
          </span>
        </div>
      </ModalMessageWrapper>

      {loading && <Loader />}
    </ModalUI>
  )
}