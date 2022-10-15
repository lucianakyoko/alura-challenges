import { ProductItem } from '../ProductItem';

import {
  ProductListContainer,
} from './style';

export function ProductList({category, productsList, showLast6products}) {
  const allProducts = productsList;
  const categoryList = allProducts.filter(item => item.category === `${category}`);

  const last6products = categoryList.reverse().slice(0,6);

  return (
    <ProductListContainer>
      { showLast6products ? 
        last6products.map(item => (
          <ProductItem
            key={item._id}
            id={item._id}
            item={item.category}
            imgSrc={item.imgSrc}
            title={item.title}
            price={item.price}
          />
        )) :
        categoryList.map(item => (
          <ProductItem
            key={item._id}
            id={item._id}
            item={item.category}
            imgSrc={item.imgSrc}
            title={item.title}
            price={item.price}
          />
        ))
    }

    </ProductListContainer>
  );
}