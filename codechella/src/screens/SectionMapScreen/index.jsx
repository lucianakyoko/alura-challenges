import { PageLayout } from "@/components/PageLayout";
import { getMapList } from "@/datas/sectionMap";
import { DetailItem } from "./DetailItem";
import { Map } from "./Map";

import {
  Details
} from './style';

export function SectionMapScreen() {
  const details = getMapList();

  return (
    <PageLayout
      pageTitle='Mapa de Setores | CodeChella'
      page='sectionmap'
      heroText='Mapa de Setores'
    >
      <Map />

      <Details>
        <h2 className="title">Mais detalhes sobre os setores:</h2>
        
        <ul className="details_list">
          {details.map(detail => (
            <DetailItem detail={detail} />
          ))}
        </ul>
      </Details>
    </PageLayout>
  );
}