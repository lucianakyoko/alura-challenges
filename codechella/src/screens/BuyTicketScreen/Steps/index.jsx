import {
  StepsContainer,
} from './style';

export function Steps({step}) {
  return(
    <StepsContainer>
      <span className='dot current'>1</span>
      <span className={step === 2 ? 'dot current' : 'dot'}>2</span>
      <span className={step === 3 ? 'dot current' : 'dot'}>3</span>
    </StepsContainer>
  );
}