import { ButtonContainer } from './style';

export function Button({type, href, title, btnStyle, showBtn}) {
  return(
    <ButtonContainer 
      type={type}
      className={showBtn ? 'show-btn' : ''}
    >
      <button className={btnStyle === 'primary' ? 'primary' : 'secondary'}>
       <a href={href}>{title}</a> 
      </button>
    </ButtonContainer>
  )
}