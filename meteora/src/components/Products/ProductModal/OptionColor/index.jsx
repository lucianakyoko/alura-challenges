import { InputRadioTemplate } from "@/components/templates/InputRadioTemplate";
import { OptionsWrapperTemplate } from "@/components/templates/OptionsWrapperTemplate";

export function  OptionColor({optionItems, handleSelectColor}) {
  return (
    <OptionsWrapperTemplate
      title='Cores:'
      optionType='colors'
    >
      {optionItems.map((option, i) => (
        <InputRadioTemplate 
          key={option.code}
          colored
          index={i}
          color={option.rgb.hex}
          name='color'
          defaultChecked={i === 0}
          value={option.color}
          onClick={() => handleSelectColor(i)}
        />
      ))}
    </OptionsWrapperTemplate>
  );
}