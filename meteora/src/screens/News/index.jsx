import { PageTemplate } from "@/components/templates/PageTemplate";
import {
  NewsContainer
} from './style';

export function News() {
  return(
    <PageTemplate title='Novidades | Meteora'>
      <NewsContainer>
        <p className="text">Em breve...</p>
      </NewsContainer>
    </PageTemplate>
  )
}