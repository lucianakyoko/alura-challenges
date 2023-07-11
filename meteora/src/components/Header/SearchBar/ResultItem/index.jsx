import { useState } from 'react';
import {
  ResultItemContainer
} from './styles';
import { ProductModal } from '@/components/Products/ProductModal';

export function ResultItem({item, handleFilter, addSavedProducts}) {
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal(!modal);

  return (
    <ResultItemContainer 
      onClick={handleModal} 
      className='result-item'
      img={item.imgSrc}
    >
      <div className='image'></div>
      <div className='title-price-wrapper'>
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