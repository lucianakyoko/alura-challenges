import {
  InputWrapper,
} from './styles';

export function InputRadioTemplate({onClick, defaultChecked, name, value, color, colored, isAvailable}) {
  return (
    <InputWrapper
      color={color} 
      colored={colored}
      disabled={isAvailable === true}
    >
      <input
        className={colored ? 'input colored': 'input'}
        type="radio" 
        id={value} 
        name={name} 
        value={value} 
        onClick={onClick}
        defaultChecked={defaultChecked}
        disabled={isAvailable === true}
      />
      <label
        className={colored ? 'label colored' : 'label'}
        htmlFor={value}
      >{value}</label>
    </InputWrapper>
  );
}