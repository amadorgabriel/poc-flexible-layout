import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useLabelContext } from "@/core/contexts/LabelContext";
import {
  ContentGroupItem,
  RotateDegreeType,
} from "@/core/types/_common/ContentGroup.types";

import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

type ContentGroupLayout = Record<string, ContentGroupItem[]>;

export const Grid = () => {
  const gridRef = useRef<any>(null);
  const { container, setContainer, contentGroup, setContentGroup } =
    useLabelContext();

  const [isGrabbing, setIsGrabbing] = useState(false);
  const [columnsAmount, setColumnsAmount] = useState<number>(
    container.cols.amount
  );

  const [visibleContentGroups, setVisibleContentGroups] =
    useState<ContentGroupLayout>({
      lg: contentGroup.groups,
    });

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

  const rowHeight = () => {
    let rowsQty = 1;

    contentGroup.groups.map((item, i) => {
      const currRowQty = item.y + item.h;

      if (i === 0) {
        rowsQty = currRowQty;
        return;
      }

      rowsQty = rowsQty > currRowQty ? rowsQty : currRowQty;
    });

    const sumBetweenYGaps = (rowsQty + 1) * container.cols.rowGap;
    const rowHeight = (container.dimensions.height - sumBetweenYGaps) / rowsQty;

    return rowHeight;
  };

  function handleRotate(index: number) {
    let groups = contentGroup.groups;
    const currRotateDeg = contentGroup.groups[index].rotateDegree || "0";

    const nextDegree = String(
      Number(currRotateDeg) + 90 === 360 ? 0 : Number(currRotateDeg) + 90
    ) as RotateDegreeType;

    groups[index] = {
      ...contentGroup.groups[index],
      rotateDegree: nextDegree,
    };

    setContentGroup({
      ...contentGroup,
      groups,
    });
  }

  function handleHide(index: number) {
    if (typeof index === "undefined") return;

    let groups = contentGroup.groups;

    groups[index] = {
      ...contentGroup.groups[index],
      hidden: true,
    };

    setContentGroup({
      ...contentGroup,
      groups,
    });
  }

  function handleTogglePin(index: number) {
    let groups = contentGroup.groups;

    groups[index] = {
      ...contentGroup.groups[index],
      static: !contentGroup.groups[index].static,
    };

    setContentGroup({
      ...contentGroup,
      groups,
    });
  }

  useEffect(() => {
    // update when cols changes
    if (container.cols.amount !== columnsAmount && !!container.cols.amount) {
      setColumnsAmount(container.cols.amount);
    }
  }, [container, setColumnsAmount, columnsAmount]);

  // update layout
  useEffect(() => {
    setVisibleContentGroups({ lg: [...contentGroup.groups] });

    // update container dimensions
  }, [contentGroup]);

  return (
    <ResponsiveGridLayout
      ref={gridRef}
      layouts={visibleContentGroups}
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
        updateContainerDimensions();

        setVisibleContentGroups({
          lg: [...contentGroup.groups],
        });
      }}
    >
      {visibleContentGroups.lg.map((groupItem, index) => {
        if (groupItem.hidden) return;

        const groups = groupItem.elements?.groupings;

        const gridItemWidth =
          groupItem.rotateDegree === "90" || groupItem.rotateDegree === "270"
            ? `${rowHeight()}px`
            : "100%";

        return (
          <div
            key={index}
            data-grid={groupItem}
            className={`grid-item ${
              groupItem.static ? "grid-item-static" : undefined
            }
              ${isGrabbing ? "grid-item-grabbing" : undefined}`}
          >
            <div
              style={{ width: gridItemWidth }}
              className={`grid-item-content rotate-${groupItem.rotateDegree}`}
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
              <button onClick={() => handleHide(index)} title="Esconder">
                <VisibilityOffOutlined sx={iconSettingSx} />
              </button>

              <button
                title="Girar"
                onClick={() => {
                  handleRotate(index);
                }}
              >
                <Rotate90DegreesCwIcon sx={iconSettingSx} />
              </button>

              <button
                onClick={() => handleTogglePin(index)}
                title={groupItem.static ? "Desafixar" : "Fixar"}
              >
                {groupItem.static ? (
                  <PushPinIcon sx={iconSettingSx} />
                ) : (
                  <PushPinOutlinedIcon sx={iconSettingSx} />
                )}
              </button>
            </div>
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};

const iconSettingSx = {
  fontSize: 14,
  margin: 0.5,
};
