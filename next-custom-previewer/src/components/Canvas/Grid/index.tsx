import { useState, useEffect, useRef } from "react";
import {
  Responsive,
  ResponsiveProps,
  WidthProvider,
  WidthProviderProps,
} from "react-grid-layout";

import { useLabelContext } from "@/core/contexts/LabelContext";

import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { ContentGroupItem } from "@/core/types/_common/ContentGroup.types";

const ResponsiveGridLayout = WidthProvider(Responsive);

// GridItemWidth = 110px
export const Grid = () => {
  const { container, setContainer, contentGroup } = useLabelContext();
  const gridRef = useRef<any>(null);

  const [columnsAmount, setColumnsAmount] = useState<number>(
    container.cols.amount
  );

  const [layouts, setLayouts] = useState<Record<string, ContentGroupItem[]>>({
    lg: contentGroup.groups,
  });

  const iconSettingSx = {
    fontSize: 14,
    margin: 0.5,
  };

  function updateContainerDimensions() {
    const gridHeight = gridRef.current?.elementRef.current.clientHeight;
    const gridWidth = gridRef.current?.elementRef.current.clientWidth;

    setContainer({
      ...container,
      dimensions: {
        ...container.dimensions,
        width: gridWidth,
        height: gridHeight,
      },
    });
  }

  function handleRemove(id: string) {
    const newState = layouts.lg.map((item) => {
      if (item.i === id) {
        item.hidden = !item.hidden;
      }

      return item;
    });

    setLayouts({ lg: newState });
  }

  //   matrizColumns: [
  //     y0: [1, 0]
  //     y1: [1, 1] // rowQty = 2
  //     y2: [1, 0]
  // ]
  function calcRowHeight(layout: ContentGroupItem[]) {
    let rowsQty = 1;
    const containerH = container.dimensions.height;

    layout.map((contentGroup, i) => {
      const currRowQty = contentGroup.y + contentGroup.h;

      if (i === 0) {
        rowsQty = currRowQty;
        return;
      }

      rowsQty = rowsQty > currRowQty ? rowsQty : currRowQty;
    });

    const sumBetweenYGaps = (rowsQty + 1) * container.cols.rowGap;
    const rowHeight = (containerH - sumBetweenYGaps) / rowsQty;
  }

  function handleUpdateLayout(layout: ContentGroupItem[]) {
    updateContainerDimensions();

    setLayouts({ lg: layout });
  }

  // update cols amount
  useEffect(() => {
    if (container.cols.amount !== columnsAmount && !!container.cols.amount) {
      setColumnsAmount(container.cols.amount);
    }
  }, [container, setColumnsAmount, columnsAmount]);

  return (
    <ResponsiveGridLayout
      ref={gridRef}
      layouts={layouts}
      isBounded
      compactType={"vertical"}
      preventCollision={false}
      cols={{
        lg: columnsAmount,
        md: columnsAmount,
        sm: columnsAmount,
        xs: columnsAmount,
        xxs: columnsAmount,
      }}
      margin={[container.cols.colGap, container.cols.rowGap]}
      breakpoints={{ lg: 12000, md: 12000, sm: 12000, xs: 12000, xxs: 12000 }}
      //---
      // rowHeight={rowHeight}
      // maxRows={6}
      onResize={updateContainerDimensions}
      onResizeStop={updateContainerDimensions}
      onDrag={updateContainerDimensions}
      onDragStop={updateContainerDimensions}
      onLayoutChange={(layout) => {
        handleUpdateLayout(layout as ContentGroupItem[]);
      }}
    >
      {layouts.lg.map(
        (item, index) =>
          !item.hidden && (
            <div
              className={`grid-item 
              
              ${item.static ? "grid-item-static" : undefined}`}
              key={index}
              data-grid={item}
            >
              <span className="text">{item.i}</span>

              <span className="grid-item-options">
                <button>
                  {item.hidden ? (
                    <VisibilityOffOutlinedIcon sx={iconSettingSx} />
                  ) : (
                    <VisibilityOutlinedIcon sx={iconSettingSx} />
                  )}
                </button>

                <button>
                  <Rotate90DegreesCwIcon sx={iconSettingSx} />
                </button>

                <button onClick={() => handleRemove(item.i)}>
                  <DeleteForeverIcon sx={iconSettingSx} />
                </button>
              </span>
            </div>
          )
      )}
    </ResponsiveGridLayout>
  );
};
