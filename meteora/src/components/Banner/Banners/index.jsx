import { BannerItem } from "./BannerItem";
import { BannerTeste } from "./BannerItem";
import {
  BannersList
} from './styles';

export function Banners({bannerList}) {
  const item1 = bannerList[0];
  const item2 = bannerList[1];
  const item3 = bannerList[2];

  return (
    <BannersList>

      <BannerTeste item={item2} />

    </BannersList>
  );
}