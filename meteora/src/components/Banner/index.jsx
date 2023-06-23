import { Indicators } from './Indicators';
import { Banners } from './Banners';
import { Buttons } from './Buttons';

import { bannerList } from './bannerList';

import {
  BannerContainer,
} from './styles';

export function Banner() {
  return (
    <BannerContainer>
      <div className='buttons-banners'>
        <Buttons />
        <Banners bannerList={bannerList} />
      </div>

      <Indicators />
    </BannerContainer>
  );
}