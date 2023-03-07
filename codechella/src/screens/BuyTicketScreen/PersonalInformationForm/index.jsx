import { InputField } from "@/components/InputField";

import {
  FormWrapper
} from './style';

export function PersonalInformationForm() {
  return(
    <FormWrapper>
      <h3 className="form-title">Informações pessoais</h3>
      <InputField
        label="Nome Completo:"
        type="text"
        id="name"
        required           
      />
      <InputField
        label="Email:"
        type="email"
        id="email"
        required            
      />
      <InputField
        label="Data de nascimento:"
        type="date"
        id="date"
        required          
      />
    </FormWrapper>
  );
}