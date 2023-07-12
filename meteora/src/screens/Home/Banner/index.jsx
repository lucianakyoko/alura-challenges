import { useEffect, useState } from "react";
import { BannersList } from "./BannersList";
import { bannerList } from "@/datas/bannerList";
import { Buttons } from "./Buttons";
import { Indicators } from "./Indicators";

import {
  BannerContainer,
} from './styles';

export function Banner() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const totalBanners = bannerList.length;

  const nextBanner = () => setCurrentBanner(prevBanner => (prevBanner + 1) % totalBanners);
  const previousBanner = () => setCurrentBanner(prevBanner => (prevBanner - 1 + totalBanners) % totalBanners);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner(prevBanner => (prevBanner + 1) % totalBanners);
    }, 3000);

    return () => clearInterval(timer)
  }, []);

  return (
    <BannerContainer>
      <div className="buttons-banners-wrapper">
        <Buttons 
          onPrevious={previousBanner}
          onNext={nextBanner}
        />
        <BannersList 
          bannerList={bannerList}
          currentBanner={currentBanner}
        />
      </div>
      <Indicators
        bannerList={bannerList}
        currentBanner={currentBanner}
      />
    </BannerContainer>
  );
}