import NextLink from 'next/link';
import { ProductItemContainer } from './style';

export function ProductItem({imgSrc, title, price}) {
  return(
    <ProductItemContainer imgSrc={imgSrc}>
      <div></div>
      
      <h3>{title}</h3>
      <span>R$ {price}</span>
      <NextLink href='/'>
        <a >ver produto</a>
      </NextLink>
    </ProductItemContainer>
  );
}