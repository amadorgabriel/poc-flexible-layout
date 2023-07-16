import { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import { NumberSize, Resizable } from "re-resizable";

import { ResizeHandle } from "./ResizeHandle.component";
import { useBlockContext } from "@/contexts/BlockContext";
import { initialContainerBlock } from "@/utils/constants";

interface ResizableContainerProps {
  flag: boolean;
}

export const ResizableContainer = ({ flag }: ResizableContainerProps) => {
  const { setFieldValue } = useFormikContext();

  const [size, setSize] = useState<Record<string, number>>(
    initialContainerBlock.initialSize
  );
  const { containerBlock } = useBlockContext();

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

  const handleResizeStop = (
    e: MouseEvent | TouchEvent,
    direction: string,
    ref: HTMLElement,
    d: NumberSize
  ) => {
    const width = size.width + d.width;
    const height = size.height + d.height;

    setSize({
      width,
      height,
    });

    setFieldValue("width", width);
    setFieldValue("height", height);

    console.log(e);
    console.log(direction);
    console.log(ref);
    console.log(d);
  };

  return (
    <Resizable
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
        height: containerBlock.initialSize.width,
      }}
      size={{
        width: size.width as number,
        height: size.height as number,
      }}
      onResizeStart={handleResizeStart}
      onResizeStop={(e, direction, ref, d) =>
        handleResizeStop(e, direction, ref, d)
      }
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
  );
};
