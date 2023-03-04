import { getBanners } from '@/datas/banners';
import { useTheme } from 'styled-components';
import { calistogaFont } from '../PageLayout';

import {
  BannerBackground,
  BannerContent,
} from './style';

export function Banner({heroText, page}) {
  const theme = useTheme();
  const isHome = page === 'home';
  const themeBanner = theme.images.banner;

  const banners = getBanners();
  const pageBanner = banners.filter(item => item.page === page);
  const banner = isHome ? themeBanner : pageBanner[0].src;

  return (
    <BannerBackground bannerImage={banner}>
      <BannerContent>
        <h1 className={`${calistogaFont.className} banner-text`}>
          {heroText}
        </h1>
      </BannerContent>
    </BannerBackground>
  );

}