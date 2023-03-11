import { InputField } from "@/components/InputField";
import {
  StepsFormContainer
} from '@/styles/ui';

export function UserIdentificationForm({data, upDateFieldHandle}) {
  return (
    <StepsFormContainer>
      <h3 className="form-title">Informações pessoais</h3>
      <InputField 
        label="Nome Completo:"
        type="text"
        id="name"
        name='name'
        placeholder="Digite seu nome completo"
        value={data.name || ""}
        onChange={e => upDateFieldHandle('name', e.target.value)}
      />
      <InputField 
        label="Email:"
        type="email"
        id="email"
        name='email'
        placeholder="Digite seu e-mail"
        value={data.email || ""}
        onChange={e => upDateFieldHandle('email', e.target.value)}
      />
      <InputField 
        label="Data de nascimento:"
        type="date"
        id="date"
        name='birthday'
        value={data.birthday || ""}
        onChange={e => upDateFieldHandle('birthday', e.target.value)}
      />
    </StepsFormContainer>
  );
}