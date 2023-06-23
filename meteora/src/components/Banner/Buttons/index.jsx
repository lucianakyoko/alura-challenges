import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import {
  ButtonsContainer,
} from './styles';

export function Buttons() {
  return (
    <ButtonsContainer>
      <span className='button'>
        <BsFillCaretLeftFill size={26}/>
      </span>
      <span className='button'>
        <BsFillCaretRightFill size={26}/>
      </span>
    </ButtonsContainer>
  );
}