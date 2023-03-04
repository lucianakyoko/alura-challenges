import {
  XpItem,
  Image
} from './style';

export function ExperienceItem({image}) {
  return (
    <XpItem>
      <Image image={image}></Image>
      <div className='title-text'>
        <h3 className='title'>Acessibilidade e Inclusão</h3>
        <p className='text'>
          Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!
        </p>
      </div>
    </XpItem>
  );
}