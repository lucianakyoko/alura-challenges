import { getNextAvailableIndex } from '@/utils/getNextAvailableIndex';
import { InputRadioTemplate } from "@/components/templates/InputRadioTemplate";
import { OptionsWrapperTemplate } from "@/components/templates/OptionsWrapperTemplate";

export function OptionSize({optionItems, handleSelectSize, selectedSize}) {
  
  return (
    <OptionsWrapperTemplate
      title='Tamanhos'
      optionType='sizes'
    >
      {optionItems.map((option, i) => (
        <InputRadioTemplate 
          key={option.size}
          name='size'
          value={option.size}
          defaultChecked={i === getNextAvailableIndex(optionItems, selectedSize)}
          isAvailable={option.quantity === 0 && true}
          onClick={() =>handleSelectSize(i)}
        />
      ))}
    </OptionsWrapperTemplate>
  );
}