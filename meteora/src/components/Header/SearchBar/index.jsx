import { useState } from 'react';
import { ResultItem } from './ResultItem';

import {
  SearchBarContainer,
} from './styles';

export function SearchBar({mobile, list, addSavedProducts}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = e => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);

    const newFilter = list.filter(value => {
      return value.label.toLowerCase().includes(searchWord.toLowerCase());
    });

    if(searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <SearchBarContainer mobile={mobile}>
      <div className='input-field'>
        <input
          className="input"
          type="text" 
          placeholder="Digite o produto"
          value={wordEntered}
          onChange={handleFilter}
        />
        <span className="search-button">Buscar</span>
      </div>
      {
        filteredData.length != 0 &&
        <ul className='search-result'>
          {list !== 'undefined' ? filteredData.map(item => (
            <ResultItem 
              key={item.id} 
              item={item} 
              handleModal={handleFilter}
              addSavedProducts={addSavedProducts}
            />
            )): null}
        </ul>
      }
    </SearchBarContainer>
  );
}