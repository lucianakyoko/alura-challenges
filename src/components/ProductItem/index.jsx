import NextLink from 'next/link';

import { 
  ProductItemContainer,
  ProductItemImageWrapper,
} from './style';

export function ProductItem(props) {
  const {
    id,
    imgSrc, 
    title, 
    price, 
  } = props;
  
  return(
    <ProductItemContainer imgSrc={imgSrc}>
      <ProductItemImageWrapper imgSrc={imgSrc}></ProductItemImageWrapper>
      
      <h3>{title}</h3>
      <span>R$ {price}</span>
      <NextLink href={`/produtos/${id}`}>
        <a>ver produto</a>
      </NextLink>
    </ProductItemContainer>
  );
}