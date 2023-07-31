import { useState, useEffect } from "react";
import { useBlockContext } from "@/contexts/BlockContext";
import { Responsive, WidthProvider } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export interface GridItemProps {
  // A string corresponding to the component key
  i: string;

  // These are all in grid units, not pixels
  x: number;
  y: number;
  w: number;
  h: number;
  minW?: number;
  maxW?: number;
  minH?: number;
  maxH?: number;

  static?: boolean;
  isBounded?: boolean;
  isDraggable?: boolean;
  isResizable?: boolean;
  resizeHandles?: Array<"s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne">;
}

// GridItemWidth = 110px
export const Grid = () => {
  const { containerBlock } = useBlockContext();

  const [columnsAmount, setColumnsAmount] = useState<number>(
    containerBlock.cols.amount
  );

  const layouts: Record<string, GridItemProps[]> = {
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 2, minW: 1, minH: 1 },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 1, minH: 1 },
      { i: "c", x: 4, y: 0, w: 1, h: 2, minW: 1, minH: 1 },
    ],
  };

  useEffect(() => {
    if (
      containerBlock.cols.amount !== columnsAmount &&
      !!containerBlock.cols.amount
    ) {
      setColumnsAmount(containerBlock.cols.amount);
    }
  }, [containerBlock, setColumnsAmount, columnsAmount]);

  return (
    <ResponsiveGridLayout
      layouts={layouts}
      breakpoints={{ lg: 12000, md: 12000, sm: 12000, xs: 12000, xxs: 12000 }}
      cols={{
        lg: columnsAmount,
        md: columnsAmount,
        sm: columnsAmount,
        xs: columnsAmount,
        xxs: columnsAmount,
      }}
      //---
      isBounded
      rowHeight={30}
      compactType={"vertical"}
      preventCollision={false}
      //---
      style={{ background: "#ffca" }}
    >
      {layouts.lg.map((item, index) => (
        <div key={index} style={{ backgroundColor: "#ccc" }} data-grid={item}>
          <span className="text">{item.i}</span>
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};
