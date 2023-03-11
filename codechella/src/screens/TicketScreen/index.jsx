import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { FiSend } from 'react-icons/fi';
import { calistogaFont, PageLayout } from "@/components/PageLayout";
import { UserIdentificationForm } from "./UserIdentificationForm";
import { EventInfoForm } from "./EventInfoForm";
import { ConfirmationForm } from "./ConfirmationForm";
import { useForm } from '@/hooks/useForm';

import {
  TitleFormWrapper
} from './style';
import { Steps } from "./Steps";
import { useState } from "react";
import { Popup } from "@/components/Popup";
import { useRouter } from "next/router";
import { Loading } from "@/components/Loading";


export function TicketScreen() {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false)
  const [ageNotAlowedPopup, setAgeNotAlowedPopup] = useState(false);
  const [notFilledPopup, setNotFilledPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const formTemplate = {
    name: '',
    email: '',
    birthday: '',
    entryType: '',
    sector: '',
    ticket: '',
    eventDate: ''
  }
  const [data, setData] = useState(formTemplate);

  const upDateFieldHandle = (key, value) => {
    setData(prevState => {
      return {...prevState, [key]: value}
    })
  };

  const HandleAgeNotAlowedPopup = () => {
    setAgeNotAlowedPopup(!ageNotAlowedPopup);
    if(ageNotAlowedPopup) setDisabled(false)
  };

  const handleNotFilledPopup = () => {
    setNotFilledPopup(!notFilledPopup);
    if(notFilledPopup) setDisabled(false);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const userBirthdayYear = new Date(data.birthday).getFullYear();
    const currentYear = new Date().getFullYear();
    const userAge = currentYear - userBirthdayYear

    if(userAge >= 10) {
      setDisabled(false);
      changeStep(currentStep + 1, event)
    } else {
      setAgeNotAlowedPopup(true);
      setDisabled(true);
    }
    
    if(currentStep === 0) {
      setNotFilledPopup(false)
    }
    
    if(currentStep === 1) {
      setNotFilledPopup(true)
      if(data.sector === '' || data.ticket === '') {
        setDisabled(true);
        changeStep(currentStep)
      } else {
        setDisabled(false);
        setNotFilledPopup(false)
      }
    }
  };

  const formComponents = [
    <UserIdentificationForm data={data} upDateFieldHandle={upDateFieldHandle} />, 
    <EventInfoForm data={data} upDateFieldHandle={upDateFieldHandle} />, 
    <ConfirmationForm data={data} />
  ];

  const {
    currentStep, 
    currentFormComponent, 
    changeStep,
    isLastStep,
    isFirstStep
  } = useForm(formComponents);

  const handleCreateTicket = async () => {
    try {
      setLoading(true);
      await fetch('/api/ticket', {
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          birthday: data.birthday,
          sector: data.sector,
          ticket: data.ticket,
          entryType: data.entryType,
          eventDate: data.eventDate
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      await router.push({
        pathname: '/confirmacao',
        query:{
          name: data.name,
          email: data.email,
          birthday: data.birthday,
          sector: data.sector,
          ticket: data.ticket,
          entryType: data.entryType,
          eventDate: data.eventDate
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <PageLayout
      pageTitle="Garanta seu Ingresso | CodeChella"
      page="ticket"
      heroText="Garanta seu Ingresso"
    >

      <TitleFormWrapper>
        <h2 className={`${calistogaFont.className} title`}>Preencha o formulário a seguir:</h2>

        <div className="form-wrapper">
          <Steps currentStep={currentStep}/>

          <form className="form" onSubmit={handleSubmit}>
            <div className="inputs-container">{currentFormComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button className="button secondary" type="button" onClick={() => changeStep(currentStep - 1)}>
                  <BiLeftArrowAlt className="icon" color="#444"/>
                  <span className='text'>voltar</span>
                </button>
              )}
              {!isLastStep ? (
                <button disabled={disabled} className={disabled ? "button disabled" : 'button'} type="submit">
                  <span className='text'>Avançar!</span>
                  <BiRightArrowAlt className="icon" color="#FFF"/>
                </button>
              ) : (
                <button className="button" type="button" onClick={handleCreateTicket}>
                  <span className='text'>Confirmar</span>
                  <FiSend className="icon" color="#FFF"/>
                </button>
              )} 
            </div>
          </form>
        </div>
      </TitleFormWrapper>
      {ageNotAlowedPopup && 
        <Popup handleClick={HandleAgeNotAlowedPopup} title="Atenção" message="Crianças menores de 10 anos não são permitidas no festival" />
      }
      
      {notFilledPopup && 
        <Popup handleClick={handleNotFilledPopup} title="Tente novamente" message="Escolha o setor desejado no mapa antes de prosseguir" />
      }

      {loading && <Loading text="Gerando seu ingresso..." />}
    </PageLayout>
  );
}