import { SelectionField } from "@/components/SelectionField";

import {
  FormWrapper
} from './style';

export function EventInformationForm({ticketInfos}) {
  const types = ticketInfos.filter(item => item.detail === 'ticketType');
  const sectors = ticketInfos.filter(item => item.detail === 'sector');
  const dates = ticketInfos.filter(item => item.detail === 'date');

  return (
    <FormWrapper>
      <h3 className="form-title">Informações do evento</h3>
      <SelectionField 
        label="Tipo de ingresso"
        name="type"
        id="type"
        options={types}
      />
      <SelectionField 
        label="Setor"
        name="sector"
        id="sector"
        options={sectors}
      />
      <SelectionField 
        label="data"
        name="date"
        id="date"
        options={dates}
      />
    </FormWrapper>
  );
}