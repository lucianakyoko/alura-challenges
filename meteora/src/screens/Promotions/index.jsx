import { PageTemplate } from "@/components/templates/PageTemplate";
import {
  PromotionsContainer,
} from './styles';

export function Promotions() {
  return(
    <PageTemplate title='Promoções | Meteora'>
      <PromotionsContainer>
        <p className="text">Não há promoções no momento.</p>
        <p className="text">Por favor, volte mais tarde.</p>
      </PromotionsContainer>
    </PageTemplate>
  )
}