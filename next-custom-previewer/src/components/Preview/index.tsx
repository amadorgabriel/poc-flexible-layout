import React, { useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

import { Container } from "./Container";
import { initialContainerBlock } from "@/utils/constants";
import { useBlockContext } from "@/contexts/BlockContext";

import styles from "./Preview.module.css";

type Position = {
  xRate: number;
  yRate: number;
};

export const Preview = () => {
  const [flag, setFlag] = useState(false);

  const { containerBlock, setBlockContainer } = useBlockContext();

  const [currentPosition, setCurrentPosition] = useState<Position>({
    xRate: initialContainerBlock.initialPosition.x,
    yRate: initialContainerBlock.initialPosition.y,
  });

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    if (containerBlock.isBlocked) return;

    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });

    setBlockContainer({
      ...containerBlock,

      x: Number(data.lastX),
      y: Number(data.lastY),
    });
  };

  return (
    <div className={styles.previewContainer}>
      <Draggable
        onDrag={onDrag}
        axis={containerBlock.isBlocked ? "none" : "both"}
        bounds="parent"
        defaultPosition={{
          x: initialContainerBlock.initialPosition.x,
          y: initialContainerBlock.initialPosition.y,
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
          // onMouseDownCapture={() => {
          //   setFlag(true);
          // }}
          // onMouseUpCapture={() => {
          //   setFlag(false);
          // }}
        >
          <Container flag={flag} />
        </div>
      </Draggable>
    </div>
  );
};
