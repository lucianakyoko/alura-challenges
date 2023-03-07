import { useEffect, useState } from 'react';
import { RiArrowDropUpLine } from 'react-icons/ri';

import {
  Button
} from './style';

export function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      };
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <Button 
      className={showButton ? 'active' : ''}
      onClick={scrollToTop}
    >
      <RiArrowDropUpLine color='white' className='icon' />
    </Button>
  );
}