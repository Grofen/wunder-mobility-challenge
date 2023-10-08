import { ComponentPropsWithoutRef, Ref, forwardRef } from "react";

import cx from "clsx";

type Props = ComponentPropsWithoutRef<"input"> & {
  wrapperClassName?: string;
  label: string;
  error?: {
    message: string;
  };
};

const Input = (
  { wrapperClassName, label, error, ...props }: Props,
  ref: Ref<HTMLInputElement>
): JSX.Element => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          ref={ref}
          {...props}
          className={cx(
            "block w-full rounded-md border-0 py-1.5 text-gray-900 pl-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            wrapperClassName
          )}
        />
        {error && <small className="error">{error.message}</small>}
      </div>
    </div>
  );
};

export default forwardRef(Input);
