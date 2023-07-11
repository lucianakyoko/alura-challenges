import { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';

import {
  HeaderContainer,
} from './styles';

export function Header({isvisible, list, addSavedProducts}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderContainer>
      <div className='header'>
        <div className='content-wrapper'>
          <div className='logo-navigation-wrapper'>
            <Logo />
            <Navigation />
          </div>
          <span 
            className='open-button'
            onClick={handleMenu}
          >
            <BsList />
          </span>

          <Navigation 
            mobile
            isMenuOpen={isMenuOpen}
            handleMenu={handleMenu}
          />
          {isvisible && 
            <SearchBar
              list={list}
              addSavedProducts={addSavedProducts}
              // handleFilter={handleFilter}
              // wordEntered={wordEntered}
            />
          }
        </div>
      </div>
      <div className='searchbar-wrapper'>
        {isvisible && 
          <SearchBar 
            mobile
            list={list}
            addSavedProducts={addSavedProducts}
            // handleFilter={handleFilter}
            // wordEntered={wordEntered}
          />
        }
      </div>
    </HeaderContainer>
  );
}