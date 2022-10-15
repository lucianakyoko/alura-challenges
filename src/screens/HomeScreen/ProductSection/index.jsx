import { ProductList } from '../../../components/ProductsList';
import { ProductsSectionUI } from '../../../components/UI/ProductsSectionUI';

export function ProductSection({title, productsList}) {
  return (
    <ProductsSectionUI title={title} showMoreBtn>
      <ProductList 
        category={title} 
        productsList={productsList}
      />
    </ProductsSectionUI>
  );
}