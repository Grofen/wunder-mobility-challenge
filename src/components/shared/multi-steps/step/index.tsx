import { motion } from "framer-motion";
// import cx from "clsx";

import CheckIcon from "./check-icon";

type Props = {
  currentStep: number;
  step: number;
  title?: string;
};

const Step = ({ currentStep, step, title }: Props) => {
  const status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  const isComplete = status === "complete";

  return (
    <div className="flex items-center justify-center gap-3">
      <motion.h3
        initial={false}
        animate={status}
        variants={{
          inactive: {
            color: "var(--wunder-color-text-gray)",
          },
          active: {
            color: "var(--wunder-color-text-blue)",
          },
          complete: {
            color: "var(--wunder-color-text-blue)",
          },
        }}
      >
        {title}
      </motion.h3>

      <motion.div animate={status} className="relative w-7 h-7">
        {isComplete && (
          <>
            <motion.div
              variants={{
                active: {
                  scale: 1,
                  opacity: 1,
                },
                complete: {
                  scale: 1.25,
                  opacity: 0,
                },
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "tween",
                ease: "circOut",
              }}
              className="absolute inset-0 rounded-full bg-dark-blue opacity-20"
            />

            <motion.div
              initial={false}
              variants={{
                inactive: {
                  backgroundColor: "var(--wunder-color-fill-white)",
                  borderColor: "var(--wunder-color-border-neutral)",
                  color: "var(--wunder-color-text-neutral)",
                },
                active: {
                  backgroundColor: "var(--wunder-color-fill-white)",
                  borderColor: "var(--wunder-color-border-blue)",
                  color: "var(--wunder-color-text-blue)",
                },
                complete: {
                  backgroundColor: "var(--wunder-color-fill-blue)",
                  borderColor: "var(--wunder-color-border-blue)",
                  color: "var(--wunder-color-text-blue)",
                },
              }}
              transition={{ duration: 0.2 }}
              className={`relative flex h-7 w-7 items-center justify-center rounded-full border-2 font-semibold`}
            >
              <div className="flex items-center justify-center">
                <CheckIcon className="h-5 w-5 text-white" />
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Step;
