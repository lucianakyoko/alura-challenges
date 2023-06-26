import { CategoryItem } from "./CategoryItem";
import { categoriesList } from "./categoriesList";

import {
  CategoriesContainer
} from './styles';

export function Categories() {
  return (
    <CategoriesContainer>
      {
        categoriesList.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))
      }
    </CategoriesContainer>
  );
}
