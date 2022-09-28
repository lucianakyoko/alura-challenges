import { MagnifierIcon } from '../icons/MagnifierIcon';
import { 
  SearchBarContainer,
} from './style';

export function SearchBar() {
  return(
    <SearchBarContainer htmlFor="search">
      <input 
        type="search" 
        name="search" 
        id="search" 
        placeholder='O que deseja encontrar?'
      />
      <span>
        <MagnifierIcon />
      </span>
    </SearchBarContainer>
  );

}