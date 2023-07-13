import React, { useState } from "react";
import { Resizable } from "re-resizable";
import { DraggableContainer, DraggableChild } from "react-dragline";

import { ResizeHandle } from "./ResizeHandle";

export const Preview = () => {
  const [flag, setFlag] = useState(false);

  const boxes = [{ id: 1, position: { x: 450, y: 300 } }];

  const handleResizeStart = (e: any, direction: string) => {
    if (
      // direction !== "bottomLeft" &&
      direction !== "topLeft" &&
      direction !== "top" &&
      direction !== "left"
    ) {
      e.stopPropagation();
    }
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
      {boxes.map(({ id, position }, index) => {
        const style = {
          cursor: "move",
          background: "skyblue",
          border: "1px solid black",
        };

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
                style={style}
                defaultSize={{
                  width: 150,
                  height: 150,
                }}
                onResizeStart={handleResizeStart}
                //Definir min width/height de acordo com o conteúdo interno.
                // minWidth={100}
                // minHeight={100}
                // maxHeight={500}
                // maxWidth={500}
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
                    : undefined,
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
                    : undefined,
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
                    : undefined,
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
                    : undefined,
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
