import { PropsWithChildren } from "react";
import cx from "clsx";

type Props = {
  contentClassName?: string;
  hasPadding?: boolean;
  isNavShown?: boolean;
  title?: string;
  wrapperClassName?: string;
};

const Page = ({
  children,
  contentClassName,
  hasPadding = false,
  title,
  wrapperClassName,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <div
      className={cx(
        "pt-[82px]",
        hasPadding && "px-6 lg:px-8",
        wrapperClassName
      )}
    >
      <div className={cx(contentClassName)}>
        {title && (
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl mb-8">
            {title}
          </h1>
        )}
        {children}
      </div>
    </div>
  );
};

export default Page;
