import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import {
  FaqWrapper,
} from './style'

export function InfoItem({faq, handleToggle, activeFaq, index}) {

  return (
    <FaqWrapper onClick={() => handleToggle(index)}>
      <div className="question_wrapper">
        <h3 className="question">{faq.question}</h3>
        {activeFaq === index ? 
          <IoMdArrowDropup color="white" className="icon" />
          :
          <IoMdArrowDropdown color="white" className="icon" />
        }
      </div>
      <p 
        className={activeFaq === index ? 'answer active' : 'answer'} 
        dangerouslySetInnerHTML={{__html: faq.answer}} 
      />
    </FaqWrapper>
  );

}