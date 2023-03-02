import { Item } from "../Item";

import {
  ItemsListContainer,
} from './style';

export function ItemsList({products}) {
  return(
    <ItemsListContainer>
      {products.map(product => (
        <Item 
          key={product._id}
          id={product._id}
          img={product.imgSrc}
          productName={product.title}
          price={product.price}
          category={product.category}
          href={`/produtos/${product._id}`}
          description={product.descrition}
        />
      ))}
    </ItemsListContainer>
  )
}