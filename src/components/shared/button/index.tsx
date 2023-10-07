import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import { ButtonVariant } from "types/buttons";

import styles from "./styles.module.scss";

type ButtonProps = {
  variant?: ButtonVariant;
} & (
  | (ComponentPropsWithoutRef<"button"> & { href?: undefined })
  | (ComponentPropsWithoutRef<"a"> & { href: string })
);

const Button = ({
  variant = ButtonVariant.Primary,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  className = clsx(
    "flex justify-center items-center rounded-md px-4 py-1.5 text-sm transition disabled:opacity-50 disabled:cursor-not-allowed",
    variant === ButtonVariant.Primary && styles.primary,
    variant === ButtonVariant.Secondary && styles.secondary,
    variant === ButtonVariant.Tertiary && styles.tertiary,
    className
  );

  const inner = <span className="relative top-px">{children}</span>;

  if (typeof props.href === "undefined") {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    );
  }

  const { href, ...restProps } = props;

  return (
    <a href={href} className={className} {...restProps}>
      {inner}
    </a>
  );
};

export default Button;
