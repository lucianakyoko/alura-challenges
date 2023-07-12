import { useState } from 'react';
import { ProductModal } from '@/components/Products/ProductModal';
import {
  ResultItemContainer
} from './styles';

export function ResultItem({item, addSavedProducts}) {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <ResultItemContainer 
      className='result-item'
      img={item.imgSrc}
    >

      <div onClick={handleModal} className='image'></div>
      <div onClick={handleModal} className='title-price-wrapper'>
        <p className='title'>{item.label}</p>
        <span className='price'>R$<span>{item.price}</span>,00</span>
      </div>

        {modal && 
          <ProductModal 
            item={item} 
            handleModal={handleModal}
            addSavedProducts={addSavedProducts}
          />
        }

    </ResultItemContainer>
  );
}