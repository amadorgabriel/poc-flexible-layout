import React, { useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

import { useLabelContext } from "@/core/contexts/LabelContext";
import { ResizableContainer } from "./ResizableContainer.component.";

export type Position = {
  xRate: number;
  yRate: number;
};

export const DraggableContainer = () => {
  const [flag, setFlag] = useState(false);

  const { container, setContainer } = useLabelContext();

  const [currentPosition, setCurrentPosition] = useState<Position>({
    xRate: container.position.x,
    yRate: container.position.y,
  });

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    if (container.isBlocked) return;

    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });

    setContainer({
      ...container,

      position: {
        x: Number(data.lastX),
        y: Number(data.lastY),
      },
    });
  };

  return (
    <Draggable
      onDrag={onDrag}
      axis={container.isBlocked ? "none" : "both"}
      bounds="parent"
      defaultPosition={{
        x: container.position.x,
        y: container.position.y,
      }}
      position={
        container.isBlocked
          ? {
              x: currentPosition.xRate,
              y: currentPosition.yRate,
            }
          : undefined
      }
    >
      <div
        style={{
          width: "fit-content",
        }}
        onMouseEnter={() => {
          setFlag(true);
        }}
        onMouseLeave={() => {
          setFlag(false);
        }}
      >
        <ResizableContainer flag={flag} />
      </div>
    </Draggable>
  );
};
