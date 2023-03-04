import { PageLayout } from "@/components/PageLayout";
import { getExperiences } from "@/datas/experiences";
import { ExperienceItem } from "./ExperienceItem";

import {
  Experiences,
} from './style';

export function ExperienceScreen(){
  const experiences = getExperiences();

  return (
    <PageLayout
      pageTitle='A experiência | Codechella'
      heroText='A Experiência'
      page='experience'
    >
      <Experiences>
        {experiences.map(xp => (
          <ExperienceItem key={xp.label} xp={xp} />
        ))}
      </Experiences>
    </PageLayout>
  );
}