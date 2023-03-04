import { calistogaFont } from '@/components/PageLayout';
import {
  Group,
} from './style';

export function LineUp({bands, week, day}) {
  const levels = [...new Set(bands.map(item => item.level))];

  const getGroup = (levelNumber) => {
    const level = bands.filter(band => band.level === levelNumber);
    return level;
  };

  const displayGroup = (group => {
    const bands = getGroup(group);
    return (
      <ul className="group_bands">
        {bands.map(band => (
          <li className={`levels band_level${band.level}`}>{band.band}</li>
        ))}
      </ul>
    );
  } );

  return (
     <Group>
      <div className="week">
        <h3 className={`${calistogaFont.className} week_title`}>
          {week} &#10094;{day}&#10095;
        </h3>
      </div>
      
      <div className='group_all-groups'>
        {levels.map(level => (
          displayGroup(level)
        ))}
      </div>
     </Group>
  );
}