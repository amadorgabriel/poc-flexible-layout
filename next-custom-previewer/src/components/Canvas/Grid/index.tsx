import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useLabelContext } from "@/core/contexts/LabelContext";
import { ContentGroupItem } from "@/core/types/_common/ContentGroup.types";

import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Grid = () => {
  const gridRef = useRef<any>(null);

  const { container, setContainer, contentGroup, setContentGroup } =
    useLabelContext();
  const [columnsAmount, setColumnsAmount] = useState<number>(
    container.cols.amount
  );
  const [contentGroups, setContentGroups] = useState<
    Record<string, ContentGroupItem[]>
  >({
    lg: contentGroup.groups,
  });
  const [isGrabbing, setIsGrabbing] = useState(false);

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

  function handleHideGroup(id: number) {
    if (typeof id === "undefined") return;

    let groups = contentGroup.groups;

    groups[id] = {
      ...contentGroup.groups[id],
      hidden: true,
    };

    setContentGroup({
      ...contentGroup,
      groups,
    });
  }

  function handleToggleFixedGroup(id: number, currValue: boolean | undefined) {
    let groups = contentGroup.groups;

    groups[id] = {
      ...contentGroup.groups[id],
      static: !currValue,
    };

    setContentGroup({
      ...contentGroup,
      groups,
    });
  }

  function handleUpdateLayout(layout: ContentGroupItem[]) {
    updateContainerDimensions();

    setContentGroups({ lg: [...contentGroup.groups] });
  }

  // update when cols changes
  useEffect(() => {
    if (container.cols.amount !== columnsAmount && !!container.cols.amount) {
      setColumnsAmount(container.cols.amount);
    }
  }, [container, setColumnsAmount, columnsAmount]);

  // refresh when contentGroup changes
  useEffect(() => {
    setContentGroups({ lg: [...contentGroup.groups] });
  }, [contentGroup]);

  return (
    <ResponsiveGridLayout
      ref={gridRef}
      layouts={contentGroups}
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
      onDrag={() => {
        setIsGrabbing(true);
        updateContainerDimensions();
      }}
      onDragStop={() => {
        setIsGrabbing(false);
        updateContainerDimensions();
      }}
      onLayoutChange={(layout) => {
        handleUpdateLayout(layout as ContentGroupItem[]);
      }}
    >
      {contentGroups.lg.map((groupItem, index) => {
        const groups = groupItem.elements?.groupings;

        return (
          !groupItem.hidden && (
            <div
              key={index}
              data-grid={groupItem}
              className={`grid-item ${
                groupItem.static ? "grid-item-static" : undefined
              }
              ${isGrabbing ? "grid-item-grabbing" : undefined}
              `}
            >
              <div
                className={`grid-item-content
              ${
                groupItem.rotateDegree === "90"
                  ? "rotate-90"
                  : groupItem.rotateDegree === "180"
                  ? "rotate-180"
                  : groupItem.rotateDegree === "270"
                  ? "rotate-270"
                  : groupItem.rotateDegree === "360"
                  ? "rotate-360"
                  : "rotate-0"
              }`}
              >
                {groups?.map((element, i) => {
                  return (
                    <span key={i}>
                      {element.text && <p>{element.text}</p>}
                      {element.image && (
                        <Image
                          src={element.image.src}
                          alt="generic-alt"
                          width={100}
                          height={100}
                        />
                      )}
                    </span>
                  );
                })}
              </div>

              <div className="grid-item-options">
                <button onClick={() => handleHideGroup(index)}>
                  <VisibilityOutlinedIcon sx={iconSettingSx} />
                </button>

                <button>
                  <Rotate90DegreesCwIcon sx={iconSettingSx} />
                </button>

                <button
                  onClick={() =>
                    handleToggleFixedGroup(index, groupItem.static)
                  }
                >
                  {groupItem.static ? (
                    <PushPinIcon sx={iconSettingSx} />
                  ) : (
                    <PushPinOutlinedIcon sx={iconSettingSx} />
                  )}
                </button>
              </div>
            </div>
          )
        );
      })}
    </ResponsiveGridLayout>
  );
};
