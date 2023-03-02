import { MessageModalUI } from '../../../UI/MessageModalUI';
import { Button } from '../../../Button';
export function SuccessMessageModal({setSuccessMessage}) {

  return(
    <MessageModalUI
      color='success'
      title='Mensagem enviada com sucesso!'
      
    >
      <Button 
        showBtn
        title='ok'
        btnStyle='primary'
        onClickFunction={() => setSuccessMessage(false)}
      />
    </MessageModalUI>
  )
}