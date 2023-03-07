import {
  SelectWrapper,
} from './style';

export function SelectionField({name, label, id, options,...props}) {
  return (
    <SelectWrapper>
      <label className="label" htmlFor={id}>{label}</label>
      <select className="select" name={name} {...props}>
        <option className="option" value="" id={id}></option>
        {options.map(item => (
          <option
            key={item.label}
            className="option" 
            value={item.label} 
            id={id}
          >
            {item.label}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
}