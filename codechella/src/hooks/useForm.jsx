import { useState } from "react";

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);

  const changeStep =(index, event) => {
    if(event) event.preventDefault();
    if(index < 0 || index >= steps.length) return;
    setCurrentStep(index);
  }
  return {
    currentStep,
    currentFormComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false
  }
}