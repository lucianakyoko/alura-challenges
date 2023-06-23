const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '540px',
  tablet: '767px',
  laptop: '1024px',
  laptopL: '1440px',
};

export const device = {
  mobileS: `@media screen and (min-width: ${size.mobileS})`,
  mobileM: `@media screen and (min-width: ${size.mobileM})`,
  mobileL: `@media screen and (min-width: ${size.mobileL})`,
  tabletS: `@media screen and (min-width: ${size.tabletS})`,
  tablet: `@media screen and (min-width: ${size.tablet})`,
  laptop: `@media screen and (min-width: ${size.laptop})`,
  laptopL: `@media screen and (min-width: ${size.laptopL})`,
}