import { StepsFormContainer } from '@/styles/ui';
import {
  ConfirmationContainer,
} from './style';

export function ConfirmationForm({data}) {
  const date = data.birthday;
  const separate = date.split('-');
  const formatedDate = `${separate[2]}/${separate[1]}/${separate[0]}`;

  return (
    <StepsFormContainer>
      <h3 className='form-title'>Confirmação</h3>

      <ConfirmationContainer>
        <h3 className='confirmation-title'>Falta pouco!</h3>
        <p className='text'>Por favor, verifique os dados abaixo e clique em confirmar para gerar seu ingresso</p>
        <div className='infos-wrapper'>
          <div className='infos'>
            <p className='info'>Nome completo: <span className='data'>{data.name}</span></p>
            <p className='info'>E-mail: <span className='data'>{data.email}</span></p>
            <p className='info'>Data de Nascimento: <span className='data'>{formatedDate}</span></p>
          </div>

          <div className='infos'>
            <p className='info'>Entrada: <span className='data'>{data.entryType}</span></p>
            <p className='info'>ingresso: <span className='data'>{data.ticket}</span></p>
            <p className='info'>Setor: <span className='data sector'>{data.sector}</span></p>
            <p className='info'>Data: <span className='data'>{data.eventDate}</span></p>
          </div>
        </div>
      </ConfirmationContainer>
    </StepsFormContainer>
  );
}