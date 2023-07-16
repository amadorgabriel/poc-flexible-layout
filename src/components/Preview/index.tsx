import React, { useState } from "react";
import { DraggableContainer, DraggableChild } from "react-dragline";

import { initialContainerBlock } from "@/utils/constants";
import { ResizableContainer } from "./Container.component";

export const Preview = () => {
  const [flag, setFlag] = useState(false);

  return (
    <DraggableContainer
      style={{
        height: "calc(100vh - 40px)",
        position: "relative",
        margin: "20px",
        border: "2px dashed #bab8b8",
        backgroundImage: "radial-gradient(#c4c4c4 1px, transparent 0)",
        backgroundSize: "10px 10px",
      }}
      threshold={10}
    >
      {[initialContainerBlock].map(({ initialPosition }, index) => {
        return (
          <DraggableChild key={index} defaultPosition={initialPosition}>
            <div
              onMouseDownCapture={() => {
                setFlag(true);
              }}
              onMouseUpCapture={() => {
                setFlag(false);
              }}
            >
              <ResizableContainer flag={flag} />
            </div>
          </DraggableChild>
        );
      })}
    </DraggableContainer>
  );
};
