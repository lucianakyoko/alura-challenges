import {
  SearchBarContainer,
} from './styles';

export function SearchBar({mobile}) {
  return (
    <SearchBarContainer mobile={mobile}>
      <input
        className="input-field"
        type="text" 
        placeholder="Digite o produto"
      />
      <span className="search-button">Buscar</span>
    </SearchBarContainer>
  );
}