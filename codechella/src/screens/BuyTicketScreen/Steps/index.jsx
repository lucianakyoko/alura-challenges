import {
  StepsContainer,
} from './style';

export function Steps() {
  return(
    <StepsContainer>
      <span className='dot current'>1</span>
      <span className='dot'>2</span>
      <span className='dot'>3</span>
    </StepsContainer>
  );
}