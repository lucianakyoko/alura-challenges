import { ProductItem } from "./ProductItem";

import {
  ProductsContainer
} from './styles';

export function Products({ list }) {
  return (
    <ProductsContainer>
      {list.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ProductsContainer>
  );
}