import NextLink from 'next/link';
import { DeleteIcon } from '../icons/DeleteIcon';
import { EditIcon } from '../icons/EditIcon';

import { 
  ProductItemContainer,
  ProductItemDeleteAndEditBtnWrapper,
} from './style';

export function ProductItem({imgSrc, title, price, isAllowed}) {
  return(
    <ProductItemContainer imgSrc={imgSrc}>
      <div isAllowed={isAllowed}>
        {isAllowed && 
          <ProductItemDeleteAndEditBtnWrapper>
            <span><DeleteIcon /></span>
            <span><EditIcon /></span>
          </ProductItemDeleteAndEditBtnWrapper>        
        }
      </div>
      
      <h3>{title}</h3>
      <span>R$ {price}</span>
      <NextLink href='/'>
        <a >ver produto</a>
      </NextLink>
    </ProductItemContainer>
  );
}