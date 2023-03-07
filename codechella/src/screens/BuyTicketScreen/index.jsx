import { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { calistogaFont, PageLayout } from "@/components/PageLayout";
import { Steps } from './Steps';
import { PersonalInformationForm } from './PersonalInformationForm';
import { EventInformationForm } from './EventInformationForm';

import { getTicketInfos } from '@/datas/ticketInfos';

import {
  TicketFormContainer,
} from './style';

export function BuyTicketScreen() {
  const ticketInfos = getTicketInfos();
  const [step, setStep] = useState(1);
  const NextStep = () => setStep(step + 1);
  const PreviousStep = () => setStep(step - 1);

  return (
    <PageLayout
      pageTitle="Garanta seu Ingresso | CodeChella"
      page="ticket"
      heroText="Garanta seu Ingresso"
    >
      <TicketFormContainer>
        <h2 className={`${calistogaFont.className} title`}>Preencha o formulário a seguir:</h2>

        <form className="form" action="">
          <Steps />
          {step === 1 && <PersonalInformationForm /> }
          {step === 2 && <EventInformationForm ticketInfos={ticketInfos} />}

          <div className='buttons'>
            {step === 1 &&
              <button className='button' onClick={NextStep}>
                <span className='text'>Avançar!</span>
                <BiRightArrowAlt className="icon" color='white' />
              </button>
            }

            {step === 2 &&
              <>
                <div className='button secondary' onClick={PreviousStep}>
                  <BiLeftArrowAlt className="icon" color='#444' />
                  <span className='text'>voltar</span>
                </div>        
                <button className='button' onClick={PreviousStep}>
                  <span className='text'>confirmar</span>
                  <BiRightArrowAlt className="icon" color='white' />
                </button>        
              </>
            }
          </div>
        </form>
      </TicketFormContainer>
    </PageLayout>
  );
}