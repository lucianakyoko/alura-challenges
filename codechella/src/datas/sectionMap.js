const sectionMapList 
= [
  {
    label: 'Pista',
    image: '1',
    text: 'Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.'
  },
  {
    label: 'Pista Premium',
    image: '2',
    text: 'Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.'
  },
  {
    label: 'Cadeiras',
    image: '3',
    text: 'Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.'
  },
];

const mapLegends = [
  {
    label: 'Pista Premium',
    color: '#0E7DF1'
  },
  {
    label: 'Pista Comum',
    color: '#FE016E'
  },
  {
    label: 'Cadeiras térreo',
    color: '#01A89E'
  },
  {
    label: 'Cadeiras superiores',
    color: '#3F51B5'
  },
  {
    label: 'Rampas',
    color: '#0E7DF1'
  },
];

export const getMapList = () => sectionMapList;
export const getMapLegends = () => mapLegends;