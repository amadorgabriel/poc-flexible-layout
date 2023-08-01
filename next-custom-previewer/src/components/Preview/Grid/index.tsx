import { useState, useEffect } from "react";
import { useBlockContext } from "@/contexts/BlockContext";
import { Responsive, WidthProvider } from "react-grid-layout";
import { GridItemProps } from "@/@types/Grid.types";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

// GridItemWidth = 110px
export const Grid = () => {
  const { containerBlock } = useBlockContext();

  const [columnsAmount, setColumnsAmount] = useState<number>(
    containerBlock.cols.amount
  );

  const [layouts, setLayouts] = useState<Record<string, GridItemProps[]>>({
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 2, minW: 1, minH: 1, hidden: false },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 1, minH: 1, hidden: false },
      { i: "c", x: 4, y: 0, w: 1, h: 2, minW: 1, minH: 1, hidden: false },
    ],
  });

  function handleToggleVisibility(id: string) {
    const newState = layouts.lg.map((item) => {
      if (item.i === id) {
        item.hidden = !item.hidden;
      }

      return item;
    });

    setLayouts({ lg: newState });
  }

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
      {layouts.lg.map((item, index) => !item.hidden && (
         (
          <div key={index} style={{ backgroundColor: "#ccc" }} data-grid={item}>
            <span className="text">{item.i}</span>
            <span
              className="remove-grid-item"
              onClick={() => handleToggleVisibility(item.i)}
            >
              <button>
                {item.hidden ? (
                  <VisibilityOffOutlinedIcon
                    sx={{
                      fontSize: 20,
                      margin: 0.5,
                    }}
                  />
                ) : (
                  <VisibilityOutlinedIcon
                    sx={{
                      fontSize: 20,
                      margin: 0.5,
                    }}
                  />
                )}
              </button>
            </span>
          </div>
        )
      ))}
    </ResponsiveGridLayout>
  );
};
