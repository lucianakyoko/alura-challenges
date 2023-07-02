const src = '/banners/';

export const bannerList = [
  {
    id: 1,
    image: {
      mobile: `${src + 'mobile1.png'}`,
      tablet: `${src + 'tablet1.png'}`,
      desktop: `${src + 'desktop1.png'}`
    },
    alt: 'Banner da Meteora',
    color: '#895FB5',
    logo: '/logos/logo-white-slogan.png'
  },
  {
    id: 2,
    image: {
      mobile: `${src + 'mobile2.png'}`,
      tablet: `${src + 'tablet2.png'}`,
      desktop: `${src + 'desktop2.png'}`
    },
    alt: 'Banner da Meteora',
    color: '#F58D90',
    paragraph: 'Estilo e qualidade para durar'
  },
  {
    id: 3,
    image: {
      mobile: `${src + 'mobile3.png'}`,
      tablet: `${src + 'tablet3.png'}`,
      desktop: `${src + 'desktop3.png'}`
    },
    alt: 'Banner da Meteora',
    color: '#F87F46',
    paragraph: 'Alto impacto visual, baixo impacto ambiental. '
  }
];