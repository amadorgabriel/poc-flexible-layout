import { Resizable } from "re-resizable";
import { useFormikContext } from "formik";
import React, { useRef, useState } from "react";
import { DraggableContainer, DraggableChild } from "react-dragline";

import { ResizeHandle } from "./ResizeHandle.component";
import { useBlockContext } from "@/contexts/BlockContext";

export const Preview = () => {
  const [flag, setFlag] = useState(false);
  const { setFieldValue } = useFormikContext();

  const containerRef = useRef<Resizable | null>(null);
  const { containerBlock, initialContainerBlock, setBlockContainer } =
    useBlockContext();

  const handleResizeStart = (
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
    direction: string
  ) => {
    if (
      // direction !== "bottomLeft" &&
      direction !== "topLeft" &&
      direction !== "top" &&
      direction !== "left"
    ) {
      e.stopPropagation();
    }
  };

  const handleResizeStop = () => {
    const width = Number(containerRef.current?.size.width);
    const height = Number(containerRef.current?.size.height);

    setBlockContainer({
      ...containerBlock,
      width,
      height,
    });

    setFieldValue("width", width);
    setFieldValue("height", height);
  };

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
              <Resizable
                ref={containerRef}
                enable={
                  containerBlock.isBlocked
                    ? {
                        top: false,
                        right: false,
                        bottom: false,
                        left: false,
                        topRight: false,
                        bottomRight: false,
                        bottomLeft: false,
                        topLeft: false,
                      }
                    : undefined
                }
                style={{
                  cursor: "move",
                  background: "skyblue",
                  border: "1px solid black",
                }}
                defaultSize={{
                  width: containerBlock.initialSize.width,
                  height: containerBlock.initialSize.height,
                }}
                // size={{
                //   width: containerBlock.width ?? containerBlock.initialSize.width,
                //   height: containerBlock.height ?? containerBlock.initialSize.height,
                // }}
                onResizeStart={handleResizeStart}
                onResizeStop={handleResizeStop}
                handleStyles={{
                  top: flag
                    ? {
                        marginTop: -3,
                        marginLeft: -5,
                        top: 0,
                        left: "50%",
                        cursor: "ns-resize",
                        border: "3px solid #999",
                        borderLeft: "none",
                        borderRight: "none",
                        borderBottom: "none",
                        borderWidth: 5,
                        borderColor: "rgb(255, 0, 204)",
                        width: 10,
                        height: 10,
                        boxSizing: "border-box",
                        zIndex: 1,
                      }
                    : {},
                  left: flag
                    ? {
                        marginTop: -5,
                        marginLeft: -3,
                        top: "50%",
                        left: 0,
                        cursor: "ew-resize",
                        border: "3px solid #999",
                        borderTop: "none",
                        borderRight: "none",
                        borderBottom: "none",
                        borderWidth: 5,
                        borderColor: "rgb(255, 0, 204)",
                        width: 10,
                        height: 10,
                        boxSizing: "border-box",
                        zIndex: 1,
                      }
                    : {},
                  bottom: flag
                    ? {
                        marginTop: -7,
                        marginLeft: -5,
                        top: "100%",
                        left: "50%",
                        cursor: "ns-resize",
                        border: "3px solid #999",
                        borderLeft: "none",
                        borderRight: "none",
                        borderTop: "none",
                        borderWidth: 5,
                        borderColor: "rgb(255, 0, 204)",
                        width: 10,
                        height: 10,
                        boxSizing: "border-box",
                        zIndex: 1,
                      }
                    : {},
                  right: flag
                    ? {
                        marginTop: -5,
                        marginLeft: -7,
                        top: "50%",
                        left: "100%",
                        cursor: "ew-resize",
                        border: "3px solid #999",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "none",
                        borderWidth: 5,
                        borderColor: "rgb(255, 0, 204)",
                        width: 10,
                        height: 10,
                        boxSizing: "border-box",
                        zIndex: 1,
                      }
                    : {},
                }}
                handleComponent={{
                  topRight: flag ? <ResizeHandle /> : undefined,
                  topLeft: flag ? <ResizeHandle /> : undefined,
                  bottomLeft: flag ? <ResizeHandle /> : undefined,
                  bottomRight: flag ? <ResizeHandle /> : undefined,
                }}
                resizeRatio={1}
              ></Resizable>
            </div>
          </DraggableChild>
        );
      })}
    </DraggableContainer>
  );
};
