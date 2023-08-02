import React, { useState } from "react";
import { Container } from "./Container";
import { useBlockContext } from "@/contexts/BlockContext";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

type Position = {
  xRate: number;
  yRate: number;
};

export const Preview = () => {
  const [flag, setFlag] = useState(false);

  const { containerBlock, setBlockContainer } = useBlockContext();

  const [currentPosition, setCurrentPosition] = useState<Position>({
    xRate: containerBlock.position.x,
    yRate: containerBlock.position.y,
  });

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    if (containerBlock.isBlocked) return;

    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });

    setBlockContainer({
      ...containerBlock,

      position: {
        x: Number(data.lastX),
        y: Number(data.lastY),
      },
    });
  };

  return (
    <div className="preview-container">
      <Draggable
        onDrag={onDrag}
        axis={containerBlock.isBlocked ? "none" : "both"}
        bounds="parent"
        defaultPosition={{
          x: containerBlock.position.x,
          y: containerBlock.position.y,
        }}
        position={
          containerBlock.isBlocked
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
          <Container flag={flag} />
        </div>
      </Draggable>
    </div>
  );
};
