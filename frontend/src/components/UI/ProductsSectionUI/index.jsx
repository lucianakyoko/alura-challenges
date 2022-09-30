import NextLink from 'next/link';
import { ArrowRightIcon } from '../../icons/ArrowRightIcon';
import {
  HomeSectionUIContainer,
  HomeSectionUIHeader,
} from './style';

export function ProductsSectionUI({title, children, showMoreBtn}) {
  return(
    <HomeSectionUIContainer>
      <HomeSectionUIHeader>
        <h2>{title}</h2>
        <div className={showMoreBtn ? '' : 'dont-show-btn'}>
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