import { ProductList } from '../../../components/ProductsList';
import { ProductsSectionUI } from '../../../components/UI/ProductsSectionUI';

export function ConsolesSection() {
  return (
    <ProductsSectionUI title="Consoles">
      <ProductList />
    </ProductsSectionUI>
  );
}