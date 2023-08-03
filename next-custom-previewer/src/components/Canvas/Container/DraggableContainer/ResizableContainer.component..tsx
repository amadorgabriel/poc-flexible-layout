// Will be deleted later!!!

import { Grid } from "../../Grid";
import { useFormikContext } from "formik";
import { useState, useEffect } from "react";
import { NumberSize, Resizable } from "re-resizable";

import { ResizeHandle } from "./ResizeHandle.component";
import { useLabelContext } from "@/core/contexts/LabelContext";

type Size = {
  width: number;
  height: number;
};

interface ResizableContainerProps {
  flag: boolean;
}

type Nullish<T> = { [P in keyof T]?: T[P] | null };

export const ResizableContainer = ({ flag }: ResizableContainerProps) => {
  const { setFieldValue } = useFormikContext();
  const { container, setContainer } = useLabelContext();

  const [size, setSize] = useState<Size>({
    width: container.dimensions.width,
    height: container.dimensions.height,
  });

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

    setContainer({
      ...container,

      dimensions: {
        ...container.dimensions,
        width: Number(width),
        height: Number(height),
      },
    });
  };

  // Update container size when design form is submitted
  useEffect(() => {
    let key: keyof Size = "width";
    let newState: Nullish<Size> = {
      height: container.dimensions.height,
      width: container.dimensions.width,
    };

    // size was updated
    if (newState.height !== size.height || newState.width !== size.width) {
      if (newState.height !== size.height) key = "height";

      setSize({
        ...size,
        [key]: Number(newState[key]),
      });
    }
  }, [container, size]);

  return (
    <Resizable
      style={{
        cursor: "move",
        background: "skyblue",
        border: "1px solid black",
      }}
      defaultSize={{
        width: size.width,
        height: size.height,
      }}
      size={{
        width: size.width,
        height: size.height,
      }}
      minWidth={container.dimensions.minHeight}
      maxWidth={container.dimensions.maxWidth}
      minHeight={container.dimensions.minHeight}
      maxHeight={container.dimensions.maxHeight}
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
    >
      <Grid />
    </Resizable>
  );
};
