import { PropsWithChildren, ReactNode } from "react";
import cx from "clsx";
import AnimateElement from "../animate";

type Props = {
  contentClassName?: string;
  hasPadding?: boolean;
  isNavShown?: boolean;
  title?: string | ReactNode;
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
    <AnimateElement>
      <div
        className={cx(
          "pt-[82px]",
          hasPadding && "px-6 lg:px-8",
          wrapperClassName
        )}
      >
        <div className={cx(contentClassName)}>
          {title}
          {children}
        </div>
      </div>
    </AnimateElement>
  );
};

export default Page;
