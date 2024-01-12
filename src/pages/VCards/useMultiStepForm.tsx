import { ReactElement, useState } from "react"

const useMultiStepForm = (steps: ReactElement[]) => {
    const [activeStep, setActiveStep] = useState(0);
    function Next() {
        setActiveStep((i) => {
            if(i >= steps.length - 1) return i;
            return (i+1);
        });
    };

    function Previous() {
        setActiveStep((i) => {
            if(i < 1) return i;
            return (i-1);
        });
    };
  return {
    activeStep,
    step: steps[activeStep],
    Next,
    steps,
    Previous
  }
}

export default useMultiStepForm