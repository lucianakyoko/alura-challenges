import { ProductList } from '../../../components/ProductsList';
import { ProductsSectionUI } from '../../../components/UI/ProductsSectionUI';

export function ProductSection({title, productsList, showLast6products, setShowLast6Products}) {
 
  return (
    <ProductsSectionUI title={title} showMoreBtn>
      <ProductList 
        // showLast6products={showLast6products}
        // setShowLast6Products={setShowLast6Products(true)}
        category={title} 
        productsList={productsList}
        last4products
      />
    </ProductsSectionUI>
  );
}