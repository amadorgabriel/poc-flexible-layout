import { Resizable } from "re-resizable";
import React, { useRef, useState, useEffect } from "react";
import { DraggableContainer, DraggableChild } from "react-dragline";

import { ResizeHandle } from "./ResizeHandle";

export const Preview = () => {
  const [flag, setFlag] = useState(false);

  const containerRef = useRef<Resizable | null>(null);
  const [size, setSize] = useState<Record<string, number>>(
    container.initialSize
  );

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

  useEffect(() => {
    setSize({
      width: containerRef.current?.state.width
        ? Number(containerRef.current.state.width)
        : container.initialSize.width,
      height: containerRef.current?.state.height
        ? Number(containerRef.current?.state.height)
        : container.initialSize.height,
    });
  }, [containerRef]);

  return (
    <div>
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
        {[container].map(({ id, position }, index) => {
          return (
            <DraggableChild key={id} defaultPosition={position}>
              <div
                onMouseDownCapture={() => {
                  setFlag(true);
                }}
                onMouseUpCapture={() => {
                  setFlag(false);
                }}
              >
                <Resizable
                  // size={{
                  //   width: size.width,
                  //   height: size.height,
                  // }}
                  ref={containerRef}
                  style={container.style}
                  defaultSize={{
                    width: 450,
                    height: 450,
                  }}
                  onResizeStart={handleResizeStart}
                  onResizeStop={() => {
                    setSize({
                      width: Number(containerRef.current?.size.width),
                      height: Number(containerRef.current?.size.height),
                    });
                  }}
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

      <div style={{ position: "absolute", top: "30px", left: "30px" }}>
        <p>Width: {size.width}px</p>
        <p>Height: {size.height}px</p>
      </div>
    </div>
  );
};

const container = {
  id: 1,
  position: {
    x: 450,
    y: 300,
  },
  initialSize: {
    width: 150,
    height: 150,
  },
  style: {
    cursor: "move",
    background: "skyblue",
    border: "1px solid black",
  },
};
