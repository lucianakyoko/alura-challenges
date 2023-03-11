import { SelectionField } from '@/components/SelectionField';
import { getTicketInfos } from '@/datas/ticketInfos';
import { InteractiveMap } from '../InteractiveMap';

import {
  StepsFormContainer
} from '@/styles/ui';

export function EventInfoForm({data, upDateFieldHandle}) {
  const ticketInfos = getTicketInfos();
  const types = ticketInfos.filter(item => item.detail === 'ticketType');
  const dates = ticketInfos.filter(item => item.detail === 'date');

  return (
    <StepsFormContainer>
      <h3 className="form-title">Informações do Evento</h3>

      <InteractiveMap 
        data={data} 
        upDateFieldHandle={upDateFieldHandle} 
      />

      <SelectionField 
        label="Tipo de entrada"
        name="type"
        id="type"
        required
        options={types}
        value={data.entryType || ""}
        onChange={e => upDateFieldHandle('entryType', e.target.value)}
      />
      
      <SelectionField 
        label="Data"
        name="date"
        id="date"
        required
        options={dates}
        value={data.eventDate || ""}
        onChange={e => upDateFieldHandle('eventDate', e.target.value)}
      />     
    </StepsFormContainer>
  );
}