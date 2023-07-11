import { useState } from 'react';
import NextLink from 'next/link';

import { MagnifierIcon } from '../icons/MagnifierIcon';
import { 
  SearchBarContainer,
  SmallInput,
  VisibleInput,
  InputAndBtnWrapper,
  BigInput,
  DataResultWrapper,
} from './style';
import { CloseIcon } from '../icons/CloseIcon';

export function SearchBar({showSearchBar, productsList}) {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = productsList.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if(searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
    setIsVisible(!isVisible);
  };

  return(
    <SearchBarContainer className={showSearchBar ? 'show-searchbar' : ''}>
      <SmallInput>
        {!isVisible && 
          <span onClick={() => setIsVisible(!isVisible)}>
            <MagnifierIcon />
          </span>
        }
        {
          isVisible &&
          <VisibleInput>
            <InputAndBtnWrapper>
              <input 
                type="text" 
                name="search" 
                id="search"
                value={wordEntered}
                placeholder='O que deseja encontrar?'
                onChange={handleFilter} 
              />
              <span onClick={clearInput}>
                {filteredData.length === 0 ? 
                  <MagnifierIcon /> :
                  <CloseIcon />
                }
              </span>  
            </InputAndBtnWrapper>
            {filteredData.length != 0 &&
              <DataResultWrapper>
              {productsList !== 'undefined' ? filteredData.slice(0, 6).map(item => (
                <li key={item._id}>
                  <NextLink href={`/produtos/${item._id}`}><a onClick={clearInput}>{item.title}</a></NextLink>
                </li>
              )) : null}
            </DataResultWrapper>
            }
            
          </VisibleInput>
        }
      </SmallInput>

      <BigInput>
        <InputAndBtnWrapper>
          <input 
            type="text" 
            name="search" 
            id="search"
            value={wordEntered}
            placeholder='O que deseja encontrar?'
            onChange={handleFilter} 
          />
          <span onClick={clearInput}>
            {filteredData.length === 0 ? 
              <MagnifierIcon /> :
              <CloseIcon />
            }
          </span>  
        </InputAndBtnWrapper>
        {filteredData.length != 0 &&
          <DataResultWrapper>
          {productsList !== 'undefined' ? filteredData.slice(0, 6).map(item => (
            <li key={item._id}>
              <NextLink href={`/produtos/${item._id}`}><a onClick={clearInput}>{item.title}</a></NextLink>
            </li>
          )) : null}
        </DataResultWrapper>
        }
      </BigInput>
    </SearchBarContainer>
  )
}

