import { HighlightItem } from "./HighlightItem";

import {
  HighlightProductsWrapper
} from './styles';

export function HighlightProducts({products}){
  return (
    <HighlightProductsWrapper>
      {products.map(product => (
        <HighlightItem key={product.id} item={product} />
      ))}
    </HighlightProductsWrapper>
  );
}