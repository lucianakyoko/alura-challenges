import { useEffect, useState } from 'react';
import { getNextAvailableIndex } from '@/utils/getNextAvailableIndex';
import { OptionColor } from '../OptionColor';
import { OptionSize } from '../OptionSize';
import {
  DetailsContainer,
} from './styles';

export function Details({item, addSavedProducts, handleModal, selectedItem, setSelectedItem}) {

  const [selectedSize, setSelectedSize] = useState(0);
  
  const options = item.items;
  const sizes = options[selectedItem].sizes;

  useEffect(() => {
    const initialSizeIndex = getNextAvailableIndex(sizes, selectedSize);
    setSelectedSize(initialSizeIndex);
  }, [sizes]);

  const savedProductsDetails = {
    code: options[selectedItem].code,
    title: item.label,
    image: options[selectedItem].image,
    price: item.price,
    color: options[selectedItem].color,
    size: options[selectedItem].sizes[selectedSize].size
  };

  const handleSelectColor = index => setSelectedItem(index);
  const handleSelectSize = index => setSelectedSize(index);
  const handleSaveProduct = () => {
    addSavedProducts(savedProductsDetails);
    handleModal();
  };
  
  return (
    <DetailsContainer>
      <div className="title-description-wrapper">
        <h3 className="title">{item.label}</h3>
        <p className="description">{item.description}</p>
      </div>
      <div className="price-seller-wrapper">
        <span className="price">R$ {item.price},00</span>
        <p className="seller">Vendido e entregue por Riachuelo</p>
      </div>

      <form className='options'>
        <OptionColor 
          optionItems={options} 
          handleSelectColor={handleSelectColor}
        />
        <OptionSize 
          optionItems={sizes}
          handleSelectSize={handleSelectSize}
          selectedSize={selectedSize}
        />
      </form>
      <button 
        className="add-button"
        onClick={handleSaveProduct}
      >Adicionar à sacola</button>
    </DetailsContainer>
  );
}