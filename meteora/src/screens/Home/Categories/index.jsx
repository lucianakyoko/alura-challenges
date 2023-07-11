import { CategoryItem } from './CategoryItem';

import {
  CategoriesContainer,
} from './styles';

export function Categories({list, selectCategory, setSelectCategory}) {
  const select = option => {
    if(selectCategory !== option.id) {
      setSelectCategory(option.id);
    } else {
      setSelectCategory(null)
    }
  }

  return (
    <CategoriesContainer>
      { list.map( item => (
        <CategoryItem key={item.id} item={item} onClick={() => select(item)} />
      ))}
    </CategoriesContainer>
  );
}