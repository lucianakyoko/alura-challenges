import NextLink from "next/link";
import { getNavigationItems } from "@/datas/navigation";

import {
  Navbar,
} from './style';
import { useRouter } from "next/router";

export function Navigation({ isMenuOpen, handleMenu}) {
  const router = useRouter();
  const navItems = getNavigationItems();

  return (
    <Navbar onClick={handleMenu} className={isMenuOpen ? 'active' : ''}>
      <ul className="nav-list">
        {navItems.map(item => (
          <li key={item.id} className={router.pathname === item.href ? 'active nav-item' : 'nav-item'}>
            <NextLink href={item.href} className="nav-link" onClick={handleMenu}>
              {item.label}
            </NextLink>
          </li>
        ))}
      </ul>
    </Navbar>
  );
}