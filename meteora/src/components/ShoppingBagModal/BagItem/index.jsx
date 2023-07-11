import { BsFillTrashFill } from 'react-icons/bs';
import {
  BagItemContainer,
  BagItemImage
} from './styles';

export function BagItem({item, removeItem}) {
  const handleRemoveItem = () => {
    removeItem(item);
  }
  
  return (
    <BagItemContainer>
      <div className='content'>
        <BagItemImage image={item.image}></BagItemImage>
        <div className='details'>
          <h3 className='title'>{item.title}</h3>
          <span className='colo-size'>{item.color}/ {item.size}</span>
        </div>
      </div>
      <span className='price'>R${item.price},00</span>
      <span 
        title='deletar' 
        className='delete'
        onClick={handleRemoveItem}
      ><BsFillTrashFill /></span>
    </BagItemContainer>
  );
}