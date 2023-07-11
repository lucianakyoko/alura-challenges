import {
  OptionsWrapperTemplateContainer
} from './styles';

export function OptionsWrapperTemplate({title, optionType, children}) {
  return (
    <OptionsWrapperTemplateContainer className={`${optionType}`}>
      <p className='text'>{title}</p>
      <div className="options-list">
        {children}
      </div>
    </OptionsWrapperTemplateContainer>
  );
}