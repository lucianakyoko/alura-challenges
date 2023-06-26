import NextImage from "next/image";

import {
  ItemContainer,
} from './style';

export function CategoryItem({item}) {
  return (
    <ItemContainer>
      <div className="image">
        <NextImage 
          src={item.image}
          alt='categoria'
          fill
          sizes="100%"
          className='category'
        />
      </div>
      <span className="label">
        {item.label}
      </span>
    </ItemContainer>
  );
}