import { CategoryItem } from './CategoryItem';

import {
  CategoriesContainer,
} from './styles';

export function Categories({list}) {
  return (
    <CategoriesContainer>
      { list.map( item => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </CategoriesContainer>
  );
}