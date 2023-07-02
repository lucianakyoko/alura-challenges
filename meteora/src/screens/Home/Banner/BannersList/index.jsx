import { BannerItem } from "./BannerItem";

export function BannersList({bannerList}) {
  const item1 = bannerList[0];
  const item2 = bannerList[1];
  const item3 = bannerList[2];

  return (
    <ul>
      <BannerItem bannerItem={item1} />
    </ul>
  );
}