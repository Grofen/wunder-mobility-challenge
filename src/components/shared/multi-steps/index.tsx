import { ReactNode } from "react";
import { useSelector } from "react-redux";

import { selectRegistration } from "states/features/registration";
import { Steps } from "types/multi-steps";
import Step from "./step";

type Props = {
  children?: ReactNode;
  steps: Steps[];
};

const MultiStep = ({ children, steps }: Props): JSX.Element => {
  const { selectedStep } = useSelector(selectRegistration);

  return (
    <div className="flex items-start transition-all duration-200 ease-in-out">
      <div className="w-full rounded-md bg-white">
        <div className="flex flex-col gap-5 items-start md:flex-row md:gap-12 justify-between mb-6 p-8 border-b border-dark-blue">
          {steps.map((step, index) => (
            <Step
              key={index}
              step={index + 1}
              currentStep={selectedStep.index}
              title={step.label}
            />
          ))}
        </div>
        <div className="px-8 pb-8">{children}</div>
      </div>
    </div>
  );
};

export default MultiStep;
