import React, { useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

import { initialContainerBlock } from "@/utils/constants";
import { ResizableContainer } from "./ResizableContainer.component";

type Position = {
  xRate: number;
  yRate: number;
};

export const Preview2 = () => {
  const [flag, setFlag] = useState(false);

  const [currentPosition, setCurrentPosition] = useState<Position>({
    xRate: initialContainerBlock.initialPosition.x,
    yRate: initialContainerBlock.initialPosition.y,
  });

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
  };

  return (
    <div
      style={{
        height: "calc(100vh - 40px)",
        position: "relative",
        margin: "20px",
        border: "2px dashed #bab8b8",
        backgroundImage: "radial-gradient(#c4c4c4 1px, transparent 0)",
        backgroundSize: "10px 10px",
      }}
    >
      <Draggable
        position={{
          x: currentPosition.xRate,
          y: currentPosition.yRate,
        }}
        onDrag={onDrag}
        bounds="parent"
      >
        <div
          style={{ width: "fit-content" }}
          onMouseDownCapture={() => {
            setFlag(true);
          }}
          onMouseUpCapture={() => {
            setFlag(false);
          }}
        >
          <ResizableContainer flag={flag} />
        </div>
      </Draggable>
    </div>
  );
};
