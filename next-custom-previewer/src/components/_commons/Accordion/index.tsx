import { useState } from "react";
import { useLabelContext } from "@/core/contexts/LabelContext";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";

import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

interface AccordionProps {
  id?: number;
  title: string;
  children: React.ReactNode;
  fixed?: boolean;

  hideable?: boolean;
}

export const Accordion = ({
  id,
  title,
  children,
  fixed = false,
  hideable = false,
}: AccordionProps) => {
  const { contentGroup, setContentGroup } = useLabelContext();

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

  const fixedIcon = fixed ? (
    <PushPinIcon sx={iconSettingSx} />
  ) : (
    <PushPinOutlinedIcon sx={iconSettingSx} />
  );

  const visibleIcon = isOpen ? (
    <VisibilityOutlinedIcon sx={iconSettingSx} />
  ) : (
    <VisibilityOutlinedIcon sx={iconSettingSx} />
  );

  function handleToggleFixedGroup() {
    if (typeof id === "undefined") return;

    let groups = contentGroup.groups;

    groups[id] = {
      ...contentGroup.groups[id],
      static: !fixed,
    };

    setContentGroup({
      ...contentGroup,
      groups,
    });
  }

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
          {fixedIcon && (
            <button onClick={() => handleToggleFixedGroup()}>
              {fixedIcon}
            </button>
          )}
          {visibleIcon && <button>{visibleIcon}</button>}
        </div>
      </div>

      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};
