import { InterFont } from '@/typographies';
import { 
  SearchBarContainer,
} from './style';

export function SearchBar({mobile}) {
  return (
    <SearchBarContainer mobile={mobile}>
      <input 
        className="input-field" 
        type="text" 
        name="" 
        id=""
        placeholder='Digite o produto' 
      />
      <span className="search-button">Buscar</span>
    </SearchBarContainer>
  );
}