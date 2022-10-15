import { ProductItem } from '../ProductItem';

import {
  ProductListContainer,
} from './style';

export function ProductList({category, productsList}) {
  const allProducts = productsList;
  const categoryList = allProducts.filter(item => item.category === `${category}`);

  return (
    <ProductListContainer>
      {categoryList.map(item => (
        <ProductItem
          key={item._id}
          id={item._id}
          item={item.category}
          imgSrc={item.imgSrc}
          title={item.title}
          price={item.price}
        />
      ))}
    </ProductListContainer>
  );
}