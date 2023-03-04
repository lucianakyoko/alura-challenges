import { calistogaFont, PageLayout } from '@/components/PageLayout';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { getBandsList } from '@/datas/bands';
import { CTA } from './CTA';
import { LineUp } from './LineUp';

import {
  LineUpSection,
  DecorationImg

} from './style';

export function HomeScreen() {
  const AllBands = getBandsList();
  const saturdayBands = AllBands.filter(band => band.week === 'saturday')
  const sundayBands = AllBands.filter(band => band.week === 'sunday')

  return (
    <PageLayout
      pageTitle='CodeChella'
      heroText='Boas-vindas ao #CodeChella2023!'
      page='home'
    >
      <CTA />

      <LineUpSection>
        <h2 className={`${calistogaFont.className} line-up__title`}>/Line-Up/</h2>
        <LineUp bands={saturdayBands} week='sábado' day='11/03'/>
        <LineUp bands={sundayBands} week='domingo' day='12/03' />
      </LineUpSection>

      <DecorationImg></DecorationImg>
      <ScrollToTopButton />
    </PageLayout>
  );
}