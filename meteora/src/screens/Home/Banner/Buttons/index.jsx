import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import {
  ButtonsContainer
} from './styles';

export function Buttons({onPrevious, onNext}) {
  return (
    <ButtonsContainer>
      <span className="button" onClick={onPrevious}>
        <BsFillCaretLeftFill size={26} />
      </span>
      <span className="button" onClick={onNext}>
        <BsFillCaretRightFill size={26} />
      </span>
    </ButtonsContainer>
  );
}