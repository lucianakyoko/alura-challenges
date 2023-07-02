import NextImage from "next/image";

import {
  BannerItemContainer,
  BannerImage,
  ContentWrapper
} from './styles';

export function BannerItem({bannerItem}) {

  return (
    <BannerItemContainer
      even={bannerItem.id % 2 === 0 || bannerItem.id === 1}
    >
      <BannerImage image={bannerItem.image}></BannerImage>

      <ContentWrapper 
        even={bannerItem.id % 2 === 0 || bannerItem.id === 1}
        bgColor={bannerItem.color}
        logo={bannerItem.logo}
      >
        { bannerItem.logo && (  
          <div className="logo-wrapper">
            <div className="logo"></div>
          </div>      
        )}

        { bannerItem.paragraph && (
          <div className="text-wrapper">
            <h2 className="heading">
              <span>coleção</span>
              <span>atemporal</span>
            </h2>
            <p className="paragraph">{bannerItem.paragraph}</p>
          </div>
        ) }
      </ContentWrapper>
    </BannerItemContainer>
  );
}