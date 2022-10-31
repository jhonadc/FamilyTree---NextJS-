import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

import { Loading } from "./loading";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
  variant?: "normal" | "primary";
  loading?: boolean;
}

export function Button(props: ButtonProps) {
  const { asChild, children, variant = "normal", className, loading, ...rest } = props;
  const Comp = asChild ? Slot : "button";

  // imply disabled, if loading
  if (loading) {
    rest.disabled = true;
  }

  const compProps =
    Comp === "button"
      ? ({
          type: "button",
          ...rest,
        } as const)
      : rest;

  const buttonStyles = clsx(
    className,
    "focusable inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm",
    !loading &&
      "disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500",
    variant === "primary"
      ? "border-transparent bg-green-600 text-white"
      : "border-gray-300 bg-white text-gray-700",
    !loading &&
      (variant === "primary"
        ? "hover:bg-green-700 active:bg-green-800"
        : "hover:bg-gray-50 active:bg-gray-100")
  );

  return (
    <span className="relative inline-block">
      <Comp className={buttonStyles} {...compProps}>
        {children}
      </Comp>
      {loading && (
        <div
          className={clsx(
            className, // Note: add the classNames also to the loading state so that all margins get also applied to it
            "absolute inset-[1px] flex items-center justify-center rounded-md ",
            {
              "bg-white": variant === "normal",
              "bg-green-600": variant === "primary",
            }
          )}>
          <Loading variant={variant} />
        </div>
      )}
    </span>
  );
}

export interface LinkButtonProps extends ComponentPropsWithoutRef<"a"> {
  external?: boolean;
}

export function LinkButton(props: LinkButtonProps) {
  let { external, children, ...rest } = props;

  if (external) {
    rest = {
      rel: "noopener noreferrer",
      target: "_blank",
      ...rest,
    };
  }

  return (
    <Button asChild>
      <a {...rest}>
        {children}
        {external && (
          <>
            {" "}
            <ExternalLinkIcon className="ml-1.5 h-5 w-5" />
          </>
        )}
      </a>
    </Button>
  );
}
