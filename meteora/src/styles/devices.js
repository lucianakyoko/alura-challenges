const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '540px',
  tablet: '767px',
  laptop: '1024px',
  laptopL: '1440px',
};

const generateMediaQuery = minWidth => `@media screen and (min-width: ${minWidth})`;

export const device = {
  mobileS: generateMediaQuery(size.mobileS),
  mobileM: generateMediaQuery(size.mobileM),
  mobileL: generateMediaQuery(size.mobileL),
  tabletS: generateMediaQuery(size.tabletS),
  tablet: generateMediaQuery(size.tablet),
  laptop: generateMediaQuery(size.laptop),
  laptopL: generateMediaQuery(size.laptopL),
}