import { ButtonContainer } from './style';

export function Button({type,  title, btnStyle}) {
  return(
    <ButtonContainer 
      type={type}
      className={btnStyle === 'primary' ? 'primary' : 'secondary'}
    >
        {title}
    </ButtonContainer>
  )
}