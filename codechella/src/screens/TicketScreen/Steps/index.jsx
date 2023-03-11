

import {
  StepsContainer
} from './style';

export function Steps({currentStep}) {
  return (
    <StepsContainer>
      <span className='dot active'>1</span>
      <span className={currentStep >= 1 ? 'dot active' : 'dot'}>2</span>
      <span className={currentStep >= 2 ? 'dot active' : 'dot'}>3</span>
    </StepsContainer>
  );
}