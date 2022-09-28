import NextLink from 'next/link';
import { ArrowRightIcon } from '../../icons/ArrowRightIcon';
import {
  HomeSectionUIContainer,
  HomeSectionUIHeader,
} from './style';

export function ProductsSectionUI({title, children}) {
  return(
    <HomeSectionUIContainer>
      <HomeSectionUIHeader>
        <h2>{title}</h2>
        <div>
          <NextLink href='/'>
            <a>ver tudo</a>
          </NextLink>
          <span>
          <ArrowRightIcon />
          </span>
        </div>
      </HomeSectionUIHeader>
      {children}
    </HomeSectionUIContainer>
  );
}