import { useState } from "react";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

interface AccordionProps {
  title: string;
  children: React.ReactNode;

  lockable?: boolean;
  hideable?: boolean;
}

export const Accordion = ({
  title,
  children,
  lockable = false,
  hideable = false,
}: AccordionProps) => {
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

  const lockIcon = isOpen ? (
    <LockOpenOutlinedIcon sx={iconSettingSx} />
  ) : (
    <LockOutlinedIcon sx={iconSettingSx} />
  );

  const visibleIcon = isOpen ? (
    <VisibilityOffOutlinedIcon sx={iconSettingSx} />
  ) : (
    <VisibilityOutlinedIcon sx={iconSettingSx} />
  );

  return (
    <div className="accordion-item">
      <div
        tabIndex={0}
        className="accordion-title"
        style={isOpen ? { borderRadius: "4px 4px 0 0" } : undefined}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{title}</div>

        <div className="accordion-options">
          <button>{arrowIcon}</button>

          {lockIcon && <button>{lockIcon}</button>}
          {visibleIcon && <button>{visibleIcon}</button>}
        </div>
      </div>

      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};
