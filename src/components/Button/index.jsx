import { ButtonContainer } from './style';

export function Button(props) {
  const {
    size, 
    padding, 
    type, 
    href, 
    title, 
    btnStyle, 
    showBtn,
    onClickFunction,
  }= props;
  
  return(
    <ButtonContainer
      size={size}
      padding={padding}
      className={showBtn ? 'show-btn' : ''}
    >
      <button 
        onClick={onClickFunction}
        type={type}
        className={btnStyle === 'primary' ? 'primary' : btnStyle === 'secondary' ? 'secondary' : 'danger'}
      >
       <a href={href}>{title}</a> 
      </button>
    </ButtonContainer>
  )
}