import { getProducts } from '../../datas';
import { DeleteMessageModal } from '../DeleteMessageModal';
import { EditMessageModal } from '../EditMessageModal';
import { EditModal } from '../EditModal';
import { ProductItem } from '../ProductItem';
import {
  ProjectListContainer,
} from './style';

export function ProductList({isAllowed, category}) {
  const allProducts = getProducts();
  const categoryList = allProducts.filter(item => item.category === `${category}`);

  return (
    <ProjectListContainer>
      {category ? categoryList.map(item => (
        <ProductItem 
          key={item.id}
          isAllowed={isAllowed}
          imgSrc={item.imgSrc} 
          title={item.title} 
          price={item.price} 
        />
      )) : allProducts.map(item => (
        <ProductItem 
          key={item.id}
          isAllowed={isAllowed}
          imgSrc={item.imgSrc} 
          title={item.title} 
          price={item.price} 
      />
      ))
    } 
      {/* <DeleteMessageModal /> */}
      {/* <EditMessageModal /> */}
      {/* <EditModal /> */}
    </ProjectListContainer>
  );

}