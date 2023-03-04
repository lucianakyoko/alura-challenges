import {
  ToggleButton
} from './style';

export function ThemeToggleButton({theme, handleTheme}) {

  return (
    <ToggleButton onClick={handleTheme}>
      <span className='theme-color'></span>
      <span className='theme'>{theme ? 'boreal' : 'summer'}</span>
    </ToggleButton>
  );
}