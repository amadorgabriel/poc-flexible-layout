import { Grid } from "../Grid";
import { useFormikContext } from "formik";
import { useState, useEffect } from "react";
import { NumberSize, Resizable } from "re-resizable";

import { ResizeHandle } from "./ResizeHandle.component";
import { useBlockContext } from "@/contexts/BlockContext";
import { ContainerBlock } from "@/@types/Block.types";

interface ContainerProps {
  flag: boolean;
}

type Size = {
  width: number;
  height: number;
};

type Nullish<T> = { [P in keyof T]?: T[P] | null };

export const Container = ({ flag }: ContainerProps) => {
  const { setFieldValue } = useFormikContext();
  const { containerBlock, setBlockContainer } = useBlockContext();

  const [size, setSize] = useState<Size>({
    width: containerBlock.width,
    height: containerBlock.height,
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

    setBlockContainer({
      ...containerBlock,

      width: Number(width),
      height: Number(height),
    });
  };

  // Update size when design form is submitted
  useEffect(() => {
    let key: keyof Size = "width";
    let newState: Nullish<Size> = {
      height: containerBlock.height,
      width: containerBlock.width,
    };

    // size was updated
    if (newState.height !== size.height || newState.width !== size.width) {
      if (newState.height !== size.height) key = "height";

      setSize({
        ...size,
        [key]: Number(newState[key]),
      });
    }
  }, [containerBlock, size]);

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
        width: size.width,
        height: size.height,
      }}
      size={{
        width: size.width,
        height: size.height,
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
    >
      {/* <Grid /> */}
    </Resizable>
  );
};
