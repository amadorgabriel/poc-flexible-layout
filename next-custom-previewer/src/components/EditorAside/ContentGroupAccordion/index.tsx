import { ButtonHTMLAttributes, useState } from "react";
import { useLabelContext } from "@/core/contexts/LabelContext";
import { Accordion, AccordionProps } from "@/components/_commons/Accordion";

import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

interface ContentGroupAccordionProps extends AccordionProps {
  contentGroupId: number;
  pinable?: boolean;
  hideable?: boolean;
  rotatable?: boolean;
}

export const ContentGroupAccordion = ({
  contentGroupId,
  title,
  children,
  pinable = false,
  hideable = false,
  rotatable = false,
}: ContentGroupAccordionProps) => {
  const iconSettingSx = {
    fontSize: 14,
    margin: 0.5,
  };

  const rotateIcon = <Rotate90DegreesCwIcon sx={iconSettingSx} />;

  function getContentGroupButtons() {
    const buttons = [] as ButtonHTMLAttributes<HTMLButtonElement>[];

    // pinable &&
    //   buttons.push({
    //     onClick: () => {},
    //     children: pinIcon,
    //     title: isPinned ? "Desafixar" : "Fixar",
    //   });

    rotatable &&
      buttons.push({
        onClick: () => {},
        children: rotateIcon,
        title: "Girar",
      });

    // hideable &&
    //   buttons.push({
    //     onClick: () => {},
    //     children: visibleIcon,
    //     title: isHidden ? "Mostrar" : "Esconder",
    //   });

    return buttons;
  }

  return (
    <Accordion
      title={title}
      buttons={getContentGroupButtons()}
    >
      {children}
    </Accordion>
  );
};
