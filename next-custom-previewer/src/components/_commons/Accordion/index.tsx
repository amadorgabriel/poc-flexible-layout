import { ButtonHTMLAttributes, ReactNode, useState } from "react";

import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

export interface AccordionProps {
  title: string;
  buttons?: ButtonHTMLAttributes<HTMLButtonElement>[];
  children: ReactNode;
}

export const Accordion = ({ title, buttons, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const iconSettingSx = {
    fontSize: 14,
    margin: 0.5,
  };

  const arrowIcon = isOpen ? (
    <ArrowDropUpOutlinedIcon sx={iconSettingSx} />
  ) : (
    <ArrowDropDownOutlinedIcon sx={iconSettingSx} />
  );

  return (
    <div className="accordion-item">
      <div
        tabIndex={0}
        className="accordion-header"
        style={isOpen ? { borderRadius: "4px 4px 0 0" } : undefined}
      >
        <div
          className="accordion-options accordion-title"
          onClick={() => setIsOpen(!isOpen)}
        >
          <button>{arrowIcon}</button>
          <div>{title}</div>
        </div>

        <div className="accordion-options">
          {buttons &&
            buttons.map((props, index) => <button key={index} {...props} />)}
        </div>
      </div>

      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};
