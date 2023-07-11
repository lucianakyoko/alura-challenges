import { useState } from 'react';
import {
  ProductItemContainer,
  ProductImage,
  DetailsAndButton
} from './styles';
import { ProductModal } from '../ProductModal';

export function ProductItem({ item, addSavedProducts }) {
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal(!modal);

  return(
    <ProductItemContainer>
      <ProductImage img={item.imgSrc}></ProductImage>

      <DetailsAndButton>
        <div className="details">
          <h3 className="title">{item.label}</h3>
          <p className="description">{item.description}</p>
          <span className="price">R${item.price},00</span>
        </div>
        <span onClick={handleModal} className="button">Ver mais</span>

        {
          modal && 
            <ProductModal 
              item={item} 
              handleModal={handleModal}
              addSavedProducts={addSavedProducts}
            />
        }
      </DetailsAndButton>
    </ProductItemContainer>
  );
}