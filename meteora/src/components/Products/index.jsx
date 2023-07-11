import { ProductItem } from "./ProductItem";

import {
  ProductsContainer
} from './styles';

export function Products({ list, addSavedProducts }) {
  return (
    <ProductsContainer>
      {list.map(item => (
        <ProductItem 
          key={item.id} 
          item={item} 
          addSavedProducts={addSavedProducts}
        />
      ))}
    </ProductsContainer>
  );
}