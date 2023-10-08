import Button from "components/shared/button";
import MultiStep from "components/shared/multi-steps";
import { AnimatePresence } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  selectRegistration,
  setSelectedIndex,
} from "states/features/registration";
import { ButtonVariant } from "types/buttons";
import { HandleFormSubmit, RegistrationFormInput } from "types/registration";
import { registrationSteps } from "utils/registration";
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { SetStoredState, StoredState } from "hooks/use-stored-state";

type Props<T extends RegistrationFormInput> = {
  control: Control<T>;
  errors?: FieldErrors<T>;
  getValues?: UseFormGetValues<T>;
  handleFormSubmit?: HandleFormSubmit;
  setValue?: UseFormSetValue<T>;
  localRegistrationInfo: StoredState<T>;
  setLocalRegistrationInfo: SetStoredState<T>;
};

const RegistrationForm = <T extends RegistrationFormInput>({
  control,
  errors,
  getValues,
  handleFormSubmit,
  localRegistrationInfo,
  setLocalRegistrationInfo,
}: PropsWithChildren<Props<T>>): JSX.Element => {
  const dispatch = useDispatch();
  const [isDisplayed, setIsDisplayed] = useState(false);
  const { selectedStep } = useSelector(selectRegistration);
  const selectedIndex = selectedStep.index;
  const isLastStep = selectedIndex === registrationSteps.length;

  const setCurrentStep = (index: number) => {
    const step = registrationSteps.find((_, i) => i === index - 1);

    if (step) {
      dispatch(
        setSelectedIndex({
          label: step.label,
          name: step.name,
          index,
        })
      );
    }
  };

  const handlePrev = () => setCurrentStep(selectedIndex - 1);

  const handleNext = () => {
    setCurrentStep(selectedIndex + 1);

    if (getValues) {
      setLocalRegistrationInfo({
        ...localRegistrationInfo,
        ...getValues?.(),
      });
    }
  };

  const currentStep = registrationSteps.find(
    (step) => step.name === selectedStep.name
  );

  useEffect(() => {
    if (selectedStep.index === registrationSteps.length) {
      setInterval(() => {
        setIsDisplayed(true);
      }, 200);
    }
  }, [isLastStep, selectedStep.index]);

  return (
    <form
      aria-label="Registration from"
      onSubmit={handleFormSubmit}
      className="w-full md:max-w-3xl"
    >
      <h3 className="text-left w-full text-xl mb-6">
        Registration a new account
      </h3>
      <MultiStep steps={registrationSteps}>
        <AnimatePresence mode="wait">
          {currentStep && (
            <motion.div
              key={currentStep.name}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <currentStep.Component
                control={control}
                errors={errors}
                getValues={getValues}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 flex justify-between">
          <Button
            disabled={selectedIndex === 1}
            onClick={handlePrev}
            type="button"
            variant={ButtonVariant.Tertiary}
          >
            Back
          </Button>

          <AnimatePresence initial={false}>
            {!isLastStep && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                exit={{ opacity: 0 }}
              >
                <Button
                  className="bg-dark-blue text-white border border-dark-blue hover:bg-white hover:text-dark-blue"
                  onClick={handleNext}
                  type="button"
                  variant={ButtonVariant.Primary}
                >
                  Continue
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {isLastStep && isDisplayed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                exit={{ opacity: 0 }}
              >
                <Button
                  className="bg-dark-blue text-white border border-dark-blue hover:bg-white hover:text-dark-blue"
                  type="submit"
                  variant={ButtonVariant.Primary}
                >
                  Submit
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </MultiStep>
    </form>
  );
};

export default RegistrationForm;
