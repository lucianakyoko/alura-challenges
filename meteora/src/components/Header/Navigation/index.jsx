import NextLink from "next/link";
import { BsXLg } from "react-icons/bs";

import { navigationList } from "./navigationList";

import {
  NavigationContainer,
} from './styles';
import { useRouter } from "next/router";

export function Navigation({mobile, isMenuOpen, handleMenu}) {
  const router = useRouter();

  return (
    <NavigationContainer 
      mobile={mobile}
      className={isMenuOpen ? 'active' : ''}
    >
      <span className="close-icon" onClick={handleMenu}>
        <BsXLg size={18} />
      </span>
      <ul className="nav-list">
        {navigationList.map(navigationItem => (
          <li key={navigationItem.id} className='nav-item'>
            <NextLink
              className={router.pathname === navigationItem.href ? 'active link' : 'link'}
              href={navigationItem.href}
              onClick={handleMenu}
            >
              {navigationItem.label}
            </NextLink>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
}