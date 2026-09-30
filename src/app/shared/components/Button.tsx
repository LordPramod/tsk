import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "../utils";

type ButtonVariant = "primary" | "ghost" | "inverse";

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  inverse: "btn-inverse",
};

type ButtonStyleProps = {
  variant?: ButtonVariant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

const buttonClassName = (variant: ButtonVariant, className?: string) =>
  cn("btn group", variantClass[variant], className);

const ButtonLabel = ({ arrow, children }: Pick<ButtonStyleProps, "arrow" | "children">) => (
  <>
    {children}
    {arrow && (
      <span
        aria-hidden="true"
        className="transition-transform duration-150 motion-safe:group-hover:translate-x-0.5"
      >
        →
      </span>
    )}
  </>
);

type ButtonLinkProps = ButtonStyleProps &
  Omit<ComponentProps<typeof Link>, "className" | "children">;

export const ButtonLink = ({
  variant = "primary",
  arrow,
  className,
  children,
  ...linkProps
}: ButtonLinkProps) => (
  <Link className={buttonClassName(variant, className)} {...linkProps}>
    <ButtonLabel arrow={arrow}>{children}</ButtonLabel>
  </Link>
);

type ButtonProps = ButtonStyleProps &
  Omit<ComponentProps<"button">, "className" | "children">;

export const Button = ({
  variant = "primary",
  arrow,
  className,
  children,
  type = "button",
  ...buttonProps
}: ButtonProps) => (
  <button type={type} className={buttonClassName(variant, className)} {...buttonProps}>
    <ButtonLabel arrow={arrow}>{children}</ButtonLabel>
  </button>
);
