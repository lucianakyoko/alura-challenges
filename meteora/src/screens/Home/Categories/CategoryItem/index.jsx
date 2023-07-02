import NextImage from "next/image";

import {
  CategoryItemContainer,
} from './styles';

export function CategoryItem({item}) {
  return (
    <CategoryItemContainer>
      <div className="image">
        <NextImage 
          src={item.image}
          alt='categoria'
          fill
          sizes="100%"
          className='category'
        />
      </div>
      <span className="label">{item.label}</span>
    </CategoryItemContainer>
  );
}