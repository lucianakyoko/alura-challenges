import { useState } from "react";
import { calistogaFont, PageLayout } from "@/components/PageLayout";
import { getInformations } from "@/datas/informations";
import { InfoItem } from "./InfoItem";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

import {
  FaqContainer,
} from './style';

export function InformationScreen() {
  const faqList = getInformations();
  const [activeFaq, setActiveFaq] = useState(false);

  const handleToggle = index => {
    if(activeFaq === index) {
      return setActiveFaq(null);
    }
    setActiveFaq(index);
  }

  return (
    <PageLayout 
      pageTitle="Informações Gerais | CodeChella"
      heroText="Informações Gerais"
      page='information'
    >
      <FaqContainer>
        <h2 className={`${calistogaFont.className} title`}>Perguntas Frequentes</h2>
        <ul className="info-list">
          {faqList.map((faq, index) => (
            <InfoItem 
              key={faq.question} 
              faq={faq} 
              index={index}
              activeFaq={activeFaq} 
              handleToggle={handleToggle}
            />
          ))}
        </ul>
      </FaqContainer>
      <ScrollToTopButton />
    </PageLayout>
  );
}