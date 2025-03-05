import { FloatingMenuTitle } from "./FloatingMenuTitle";
import { FloatingMenuProps } from "./index.types";

export const FloatingMenu = ({
  children,
  size = "md",
  variant = "default",
  ...props
}: FloatingMenuProps) => {
  const sizeVariants: number = {
    sm: 64,
    md: 72,
    lg: 96,
  }[size];

  const contentStyle: string = {
    transparent: `bg-transparent w-${sizeVariants}`,
    default: `bg-white rounded-md p-4 border border-slate-600 w-${sizeVariants}`,
  }[variant];

  const containerStyle = `fixed space-x-2  ${
    props.className && props.className
  }`;

  return (
    <div {...props} className={containerStyle}>
      <div className={contentStyle}>{children}</div>
    </div>
  );
};

FloatingMenu.Title = FloatingMenuTitle;
