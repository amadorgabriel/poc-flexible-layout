import { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import { GridItemProps } from "@/@types/Grid.types";
import { initialGridLayout } from "@/utils/constants";
import { useContainerContext } from "@/contexts/ContainerContext";

import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

// GridItemWidth = 110px
export const Grid = () => {
  const { container } = useContainerContext();

  const [columnsAmount, setColumnsAmount] = useState<number>(
    container.cols.amount
  );

  const [layouts, setLayouts] = useState<Record<string, GridItemProps[]>>({
    lg: initialGridLayout,
  });

  const [rowHeight, setRowHeight] = useState<number | undefined>(110);

  const iconSettingSx = {
    fontSize: 14,
    margin: 0.5,
  };

  function handleRemove(id: string) {
    const newState = layouts.lg.map((item) => {
      if (item.i === id) {
        item.hidden = !item.hidden;
      }

      return item;
    });

    setLayouts({ lg: newState });
  }

  function handleUpdateLayout(layout: GridItemProps[]) {
    calcRowHeight(layout);

    setLayouts({ lg: layout });
  }

  //   matrizColumns: [
  //     y0: [1, 0]
  //     y1: [1, 1] // rowQty = 2
  //     y2: [1, 0]
  // ]
  function calcRowHeight(layout: GridItemProps[]) {
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

    setRowHeight(rowHeight);
  }

  // handle cols update
  useEffect(() => {
    if (container.cols.amount !== columnsAmount && !!container.cols.amount) {
      setColumnsAmount(container.cols.amount);
    }
  }, [container, setColumnsAmount, columnsAmount]);

  return (
    <ResponsiveGridLayout
      layouts={layouts}
      autoSize
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
      compactType={"vertical"}
      preventCollision={false}
      //---
      rowHeight={rowHeight}
      // maxRows={6}
      onResize={(layout) => {
        calcRowHeight(layout as GridItemProps[]);
      }}
      onLayoutChange={(layout) => {
        handleUpdateLayout(layout as GridItemProps[]);
        calcRowHeight(layout as GridItemProps[]);
      }}
      margin={[container.cols.colGap, container.cols.rowGap]}
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
