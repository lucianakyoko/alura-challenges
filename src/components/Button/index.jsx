import { ButtonContainer } from './style';

export function Button({size, padding, type, href, title, btnStyle, showBtn}) {
  return(
    <ButtonContainer
      size={size}
      padding={padding}
      type={type}
      className={showBtn ? 'show-btn' : ''}
    >
      <button className={btnStyle === 'primary' ? 'primary' : btnStyle === 'secondary' ? 'secondary' : 'danger'}>
       <a href={href}>{title}</a> 
      </button>
    </ButtonContainer>
  )
}