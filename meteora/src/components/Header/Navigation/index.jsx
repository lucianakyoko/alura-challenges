import { useRouter } from "next/router";
import NextLink from "next/link";
import { BsXLg } from "react-icons/bs";
import { navigationList } from "@/datas/navigationList";

import {
  NavigationContainer,
  NavigationList,
  NavigationItem
} from './style';

export function Navigation({mobile, isMenuOpen, handleMenu}) {
  const router = useRouter();
  return (
    <NavigationContainer
      mobile={mobile}
      className={isMenuOpen ? 'active' : ''}
    >
      <span 
        className="close-button"
        onClick={handleMenu}
      >
        <BsXLg />
      </span>

      <NavigationList>
        {navigationList.map(item => (
          <NavigationItem
            key={item.id}
            className="nav-item"
          >
            <NextLink
              className={router.pathname === item.href ? 'active link' : 'link'}
              href={item.href}
              onClick={handleMenu}
            >{item.label}</NextLink>
          </NavigationItem>
        ))}
      </NavigationList>
    </NavigationContainer>
  );
}