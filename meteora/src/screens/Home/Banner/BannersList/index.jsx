import { BannerItem } from "./BannerItem";

import {
  BannerListContainer
} from './styles';

export function BannersList({bannerList, currentBanner}) {
  const index = bannerList.indexOf(bannerList[currentBanner]);
  const banner = bannerList[currentBanner];

  return (
    <BannerListContainer>
      <BannerItem
        bannerItem={banner}
        isActive={index === currentBanner}
      />
    </BannerListContainer>
  );
}
