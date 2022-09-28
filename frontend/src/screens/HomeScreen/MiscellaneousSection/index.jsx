import { ProductList } from '../../../components/ProductsList';
import { ProductsSectionUI } from '../../../components/UI/ProductsSectionUI';

export function MiscellaneousSection() {
  return (
    <ProductsSectionUI title="Diversos">
      <ProductList />
    </ProductsSectionUI>
  );
}