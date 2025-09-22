import React, { forwardRef } from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"a"> &
  React.ComponentPropsWithoutRef<"button"> & {
    as?: "a" | "button" | React.ElementType;
    href?: string;
  };

const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  { as = "a", href = "#", children, className = "", ...props },
  ref
) {
  const As: any = as;
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-black text-white focus:ring-black ";
  const isAnchor = As === "a";
  const isButton = As === "button";

  const elementProps: any = { ...props };
  if (isAnchor) elementProps.href = href;
  if (isButton && elementProps.type == null) elementProps.type = "button";

  return (
    <As ref={ref as any} className={base + className} {...elementProps}>
      {children}
    </As>
  );
});

export default Button;
