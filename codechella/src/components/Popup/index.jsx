import {
  Background
} from './style';

export function Popup({title, message, handleClick}) {
  return (
    <Background>
      <div className='popup'>
        <span className='close-btn' onClick={handleClick}>x</span>
        <div className="message-container">
          <h3 className='title'>{title}</h3>
          <p className="message">{message}</p>
        </div>
      </div>
    </Background>
  );
}