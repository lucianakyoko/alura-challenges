import { getProducts } from '../../datas';
import { ProductItem } from '../ProductItem';

import {
  ProjectListContainer,
} from './style';

export function ProductList({category}) {
  const allProducts = getProducts();
  const categoryList = allProducts.filter(item => item.category === `${category}`);

  return (
    <ProjectListContainer>
      {categoryList.map(item => (
        <ProductItem 
          key={item.id}
          id={item.id}
          item={item.category}
          imgSrc={item.imgSrc} 
          title={item.title} 
          price={item.price} 
        />
      ))} 
    </ProjectListContainer>
  );

}