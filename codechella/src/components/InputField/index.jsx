import {
  InputWrapper,
} from './style';

export function InputField({label, type, id, ...props}) {
  return(
    <InputWrapper>
      <label className='label' htmlFor={id}>{label}</label>
      <input className='input' {...props} />
    </InputWrapper>
  );
}