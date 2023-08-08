import { ButtonHTMLAttributes, useState } from "react";
import { useLabelContext } from "@/core/contexts/LabelContext";
import { RotateDegreeType } from "@/core/types/_common/ContentGroup.types";
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
  const { contentGroup, setContentGroup } = useLabelContext();
  const [isPinned, setIsPinned] = useState(
    contentGroup.groups[contentGroupId].static
  );
  const [isHidden, setIsHidden] = useState(
    contentGroup.groups[contentGroupId].hidden
  );
  const [rotateDeg, setRotateDeg] = useState<RotateDegreeType>(() => {
    const defaultValue =
      contentGroup.groups[contentGroupId].rotateDegree || "0";

    return defaultValue;
  });

  const iconSettingSx = {
    fontSize: 14,
    margin: 0.5,
  };

  const rotateIcon = <Rotate90DegreesCwIcon sx={iconSettingSx} />;

  const pinIcon = isPinned ? (
    <PushPinIcon sx={iconSettingSx} />
  ) : (
    <PushPinOutlinedIcon sx={iconSettingSx} />
  );

  const visibleIcon = isHidden ? (
    <VisibilityOffOutlinedIcon sx={iconSettingSx} />
  ) : (
    <VisibilityOutlinedIcon sx={iconSettingSx} />
  );

  function handleRotate() {
    let groups = contentGroup.groups;

    const nextDegree = String(
      Number(rotateDeg) + 90 === 360 ? 0 : Number(rotateDeg) + 90
    ) as RotateDegreeType;

    groups[contentGroupId] = {
      ...contentGroup.groups[contentGroupId],
      rotateDegree: nextDegree,
    };

    setRotateDeg(nextDegree);

    setContentGroup({
      ...contentGroup,
      groups,
    });
  }

  function handleToggleVisibility() {
    let groups = contentGroup.groups;

    groups[contentGroupId] = {
      ...contentGroup.groups[contentGroupId],
      hidden: !isHidden,
    };

    setIsHidden(!isHidden);

    setContentGroup({
      ...contentGroup,
      groups,
    });
  }

  function handleTogglePin() {
    let groups = contentGroup.groups;

    groups[contentGroupId] = {
      ...contentGroup.groups[contentGroupId],
      static: !isPinned,
    };

    setIsPinned(!isPinned);

    setContentGroup({
      ...contentGroup,
      groups,
    });
  }

  function getContentGroupButtons() {
    const buttons = [] as ButtonHTMLAttributes<HTMLButtonElement>[];

    pinable &&
      buttons.push({
        onClick: handleTogglePin,
        children: pinIcon,
        title: isPinned ? "Desafixar" : "Fixar",
      });

    rotatable &&
      buttons.push({
        onClick: handleRotate,
        children: rotateIcon,
        title: "Girar",
      });

    hideable &&
      buttons.push({
        onClick: handleToggleVisibility,
        children: visibleIcon,
        title: isHidden ? "Mostrar" : "Esconder",
      });

    return buttons;
  }

  return (
    <Accordion
      title={title}
      buttons={getContentGroupButtons()}
      className={isHidden ? "content-group-hidden" : ""}
    >
      {children}
    </Accordion>
  );
};
