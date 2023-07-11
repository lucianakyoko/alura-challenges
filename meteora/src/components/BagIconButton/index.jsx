import { BsFillBagFill } from 'react-icons/bs';

import {
  BagIconButtonContainer
} from './style';

export function BagIconButton({itemsInTheBag, bagIcon, handleBagIcon}) {
  const showBagIcon = itemsInTheBag > 0 || bagIcon;

  return(
    <BagIconButtonContainer 
      className={!showBagIcon ? 'active' : ''}
      onClick={handleBagIcon}
    >
      <div className='notification'>
        <span className='icon'><BsFillBagFill /></span>
        <span className='number'>{itemsInTheBag}</span>
      </div>
    </BagIconButtonContainer>
  )
}