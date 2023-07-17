import React, { useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

import { Container } from "./Container.component";
import { initialContainerBlock } from "@/utils/constants";
import { useBlockContext } from "@/contexts/BlockContext";

import styles from "@/styles/Preview.module.css";

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
    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });

    setBlockContainer({
      ...containerBlock,

      x: Number(data.lastX),
      y: Number(data.lastY),
    });
  };

  return (
    <div className={styles.container}>
      <Draggable
        position={{
          x: currentPosition.xRate,
          y: currentPosition.yRate,
        }}
        onDrag={containerBlock.isBlocked ? undefined : onDrag}
        axis={containerBlock.isBlocked ? "none" : undefined}
        bounds="parent"
      >
        <div
          style={{
            width: "fit-content",
          }}
          onMouseDownCapture={() => {
            setFlag(true);
          }}
          onMouseUpCapture={() => {
            setFlag(false);
          }}
        >
          <Container flag={flag} />
        </div>
      </Draggable>
    </div>
  );
};
