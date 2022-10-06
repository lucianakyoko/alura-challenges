import { useModal } from '../../hooks/useModal';
import { getProducts } from '../../datas';
import { ProductItem } from '../ProductItem';
import { DeleteMessageModal } from '../DeleteMessageModal';

import {
  ProjectListContainer,
} from './style';
import { EditModal } from '../EditModal';

export function ProductList({isAllowed, category}) {
  const {
    isDeleteMessageModalOpened,
    isEditModalOpened,
    openDeleteMessageModal,
    closeDeleteMessageModal,
    openEditModal,
    closeEditModal,
  } = useModal();

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
          openDeleteModal={openDeleteMessageModal} 
          openEditModal={openEditModal} 
        />
      ))
    } 
      {isDeleteMessageModalOpened ? <DeleteMessageModal closeModal={closeDeleteMessageModal}/> : null}
      {isEditModalOpened ? <EditModal closeModal={closeEditModal} /> : null }
    </ProjectListContainer>
  );

}