import { PageLayout } from "@/components/PageLayout";
import { ExperienceItem } from "./ExperienceItem";

import {
  Experiences,
} from './style';

export function ExperienceScreen(){
  return (
    <PageLayout
      pageTitle='A experiência | Codechella'
      heroText='A Experiência'
      page='experience'
    >

      <Experiences>
        <ExperienceItem image='/experience/experience1.png' />
        <ExperienceItem image='/experience/experience2.png'/>
        <ExperienceItem image='/experience/experience3.png'/>
      </Experiences>
    </PageLayout>
  );
}