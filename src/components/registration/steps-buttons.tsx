import { useDispatch, useSelector } from "react-redux";

import {
  selectRegistration,
  setSelectedIndex,
} from "states/features/registration";

import Button from "components/shared/button";
import { ButtonVariant } from "types/buttons";
import { Steps } from "types/multi-steps";

type Props = {
  steps: Steps[];
};

const StepsButtons = ({ steps }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const { selectedStep } = useSelector(selectRegistration);
  const selectedIndex = selectedStep.index;

  const handelNextPrev = (index: number) => {
    const step = steps.find((_, i) => i === index - 1);

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

  return (
    <div className="mt-10 flex justify-between">
      <Button
        disabled={selectedIndex === 1}
        onClick={() => handelNextPrev(selectedIndex - 1)}
        type="button"
        variant={ButtonVariant.Tertiary}
      >
        Back
      </Button>

      {!(selectedIndex === steps.length) && (
        <Button
          className="bg-dark-blue text-white border border-dark-blue hover:bg-white hover:text-dark-blue"
          onClick={() => handelNextPrev(selectedIndex + 1)}
          type="button"
          variant={ButtonVariant.Primary}
        >
          Continue
        </Button>
      )}
    </div>
  );
};

export default StepsButtons;
