"use client";

import GridLayout from "react-grid-layout";
import { GridItem } from "@/core/types";
import { useEffect, useRef, useState } from "react";

interface ContainerSettings {
  width: number;
  height: number;
  itemSpacing: number;
  lineHeight: number;
  margin: number;
}

interface BasicGridProps {
  id: string;
  settings: ContainerSettings;
  items: GridItem[];
}

const ROW_HEIGHT: number = 30;
const CM2PX: number = 37.8;

export const BasicGrid = ({ settings, items }: BasicGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);

  const [containerSize, setContainerSize] = useState({
    width: settings.width,
    height: settings.height,
  });

  const containerStyle = {
    width: `${containerSize.width}cm`,
    height: `${containerSize.height}cm`,
  };

  const updateContainerSize = () => {
    if (!gridRef?.current?.clientHeight || !gridRef?.current?.clientHeight) {
      return;
    }

    console.log(gridRef);

    // width: gridRef.current?.clientWidth / CM2PX + settings.margin,
    setContainerSize((prevState) => ({
      width: prevState.width,
      height: gridRef.current?.clientHeight! / CM2PX + settings.margin,
    }));
  };

  useEffect(() => {
    updateContainerSize();
  }, []);

  return (
    <div className="relative flex">
      <div
        className={`bg-white rounded-lg shadow-lg overflow-hidden`}
        style={containerStyle}
      >
        <GridLayout
          innerRef={gridRef}
          className="layout"
          layout={items}
          cols={1}
          rowHeight={ROW_HEIGHT}
          width={containerSize.width * CM2PX}
          onLayoutChange={updateContainerSize}
          // margin={[settings.itemSpacing * CM2PX, settings.itemSpacing * CM2PX]}
          // containerPadding={[settings.margin * CM2PX, settings.margin * CM2PX]}
        >
          {items.map((item) => {
            return (
              <div
                key={item.i}
                className="bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                style={{ lineHeight: `${settings.lineHeight}cm` }}
              >
                <div className="flex items-center">
                  <span className="text-gray-800 select-none">
                    {item.content}
                  </span>
                </div>
              </div>
            );
          })}
        </GridLayout>
      </div>
    </div>
  );
};
