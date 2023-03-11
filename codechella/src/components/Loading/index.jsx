import {
  LoadingContainter,
} from './style';

export function Loading({text}) {
  return (
    <LoadingContainter>
      <div className='wrapper'>
        <span className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>
        <p className='text'>{text}</p>
      </div>
    </LoadingContainter>
  );
}