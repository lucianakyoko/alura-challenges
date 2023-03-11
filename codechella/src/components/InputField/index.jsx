import {
  InputWrapper,
} from './style';

export function InputField({label, type, id, name, ...props}) {
  return(
    <InputWrapper>
      <label 
        className='label' 
        htmlFor={id}
      >
        {label}
      </label>

      <input 
        className='input' 
        type={type} 
        id={id}
        name={name}
        {...props}
        required 
      />
    </InputWrapper>
  );
}