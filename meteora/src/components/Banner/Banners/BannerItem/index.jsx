import NextImage from 'next/image';
import {
  ItemContainer,
  ContentWrapper
} from './styles';

export function BannerItem({item}) {
  return (
    <ItemContainer>
      <NextImage 
        src={item.backgroundImage.mobile}
        alt='Banner da Meteora'
        fill
        sizes="100vw"
        className='banner-img mobile'
      />
      <NextImage 
        src={item.backgroundImage.tablet}
        alt='Banner da Meteora'
        fill
        sizes="100vw"
        className='banner-img tablet'
      />
      <NextImage 
        src={item.backgroundImage.desktop}
        alt='Banner da Meteora'
        fill
        sizes="100vw"
        className='banner-img desktop'
      />
      <ContentWrapper even={item.id % 2 === 0}>
        {
          item.paragraph && (
            <div className='texts'>
              <h2 className='heading'>
                <span>coleção</span>
                <span>atemporal</span>
              </h2>
              <p className='paragraph'>{item.paragraph}</p>
            </div>
          )
        }
      </ContentWrapper>
    </ItemContainer>
  );
}