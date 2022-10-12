import { Item } from "../Item";
import { getProducts } from '../../../datas';

import {
  ItemsListContainer,
} from './style';

export function ItemsList() {
  const products = getProducts();

  return(
    <ItemsListContainer>
      {products.map(product => (
        <Item 
          key={product.id}
          img={product.imgSrc}
          productName={product.title}
          price={product.price}
          category={product.category}
          href={`/produtos/${product.id}`}
          description={product.description}
        />
      ))}
    </ItemsListContainer>
  )
}