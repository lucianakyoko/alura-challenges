import {
  IndicatorsContainer
} from './styles';

export function Indicators({bannerList, currentBanner}) {
  return (
    <IndicatorsContainer>
      {bannerList.map((banner, i) => (
        <span
          key={banner.id}
          className={currentBanner === i ? 'indicator active' : 'indicator'}
        ></span>
      ))}
    </IndicatorsContainer>
  );
}