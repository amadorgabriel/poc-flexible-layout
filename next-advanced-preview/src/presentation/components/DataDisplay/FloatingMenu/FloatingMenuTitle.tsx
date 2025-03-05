import { FloatingMenuTitleProps } from "./index.types";

export const FloatingMenuTitle = ({ title, icon }: FloatingMenuTitleProps) => {
  return (
    <div className="flex items-center mb-3 space-x-2">
      {icon}
      <h3 className="text-sm font-medium">{title}:</h3>
    </div>
  );
};
