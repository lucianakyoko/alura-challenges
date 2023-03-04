import {
  XpItem,
  Image
} from './style';

export function ExperienceItem({xp}) {
  return (
    <XpItem>
      <Image image={`/experience/experience${xp.image}.png`}></Image>
      <div className='title-text'>
        <h3 className='title'>{xp.label}</h3>
        <p className='text'>
          {xp.text}
        </p>
      </div>
    </XpItem>
  );
}