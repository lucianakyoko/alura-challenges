const size = {
  tablet: '767px',
  laptop: '1024px',
  laptopL: '1440px',
};

export const device = {
  tablet: `@media screen and (min-width: ${size.tablet})`,
  laptop: `@media screen and (min-width: ${size.laptop})`,
  laptopL: `@media screen and (min-width: ${size.laptopL})`,
}