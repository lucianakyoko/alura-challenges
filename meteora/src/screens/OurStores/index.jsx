import { PageTemplate } from "@/components/templates/PageTemplate";
import {
  OurStoresContainer
} from './styles';

export function OurStores() {
  return(
    <PageTemplate title='Nossas lojas | Meteora'>
      <OurStoresContainer>
        <div className="titles">
          <h1 className="page-title">Nossas lojas</h1>
          <p className="page-subtitle">Conheça nossas lojas físicas</p>
        </div>
        <div className="sections">
          <section className="section">
            <h2 className="store">Loja 1</h2>
            <p>Endereço: Rua A, 123</p>
            <p>Telefone: (XX) XXXX-XXXX</p>
          </section>

          <section className="section">
            <h2 className="store">Loja 2</h2>
            <p>Endereço: Rua B, 456</p>
            <p>Telefone: (XX) XXXX-XXXX</p>
          </section>
        </div>

      </OurStoresContainer>
    </PageTemplate>
  )
}