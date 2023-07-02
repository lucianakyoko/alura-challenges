import { BannersList } from "./BannersList";
import { bannerList } from "@/datas/bannerList";
import { Buttons } from "./Buttons";
import { Indicators } from "./Indicators";

import {
  BannerContainer,
} from './styles';

export function Banner() {
  return (
    <BannerContainer>
      <div className="buttons-banners-wrapper">
        <Buttons />
        <BannersList bannerList={bannerList} />
      </div>
      <Indicators />
    </BannerContainer>
  );
}