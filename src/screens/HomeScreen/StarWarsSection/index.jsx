import { ProductList } from '../../../components/ProductsList';
import { ProductsSectionUI } from '../../../components/UI/ProductsSectionUI';

export function StarWarsSection() {
  return (
    <ProductsSectionUI title="Star Wars" showMoreBtn>
      <ProductList category='starwars' />
    </ProductsSectionUI>
  );
}