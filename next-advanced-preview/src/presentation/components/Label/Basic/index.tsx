"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

import GridLayout from "react-grid-layout";

import { GridItem } from "@/core/types";
import { mergeRefs } from "@/core/utils/mergeRef.const";
import { useEditor } from "@/presentation/context/EditorContext";
import { EditorPageSettings } from "@/presentation/context/EditorContext/index.types";

const CM2PX: number = 37.8; //1mm
const CM2MM: number = CM2PX / 10; //1mm
const ROW_HEIGHT: number = CM2MM * 2; //2mm

export interface ContainertLabelProps {
  id: string;
  settings: EditorPageSettings;
  items: GridItem[];
}

export const BasicLabel = ({ settings, items }: ContainertLabelProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { printRef } = useEditor();

  const [containerSize, setContainerSize] = useState({
    width: settings.width,
    height: settings.height,
  });

  const containerStyle: CSSProperties = {
    width: `${containerSize.width}mm`,
    height: `${containerSize.height}mm`,
    minWidth: `${containerSize.width}mm !important`,
    minHeight: `${containerSize.height}mm !important`,
  };

  const itemStyle: CSSProperties = {
    fontSize: `${settings.fontSize}mm`,
    lineHeight: `${settings.lineHeight}mm`,
  };

  const updateContainerSize = () => {
    if (!gridRef?.current?.clientHeight || !gridRef?.current?.clientHeight) {
      return;
    }

    setContainerSize((prevState) => ({
      // width: prevState.width,
      width: gridRef.current?.clientWidth! / CM2MM,
      height: gridRef.current?.clientHeight! / CM2MM,
    }));
  };

  useEffect(() => {
    setContainerSize({
      width: settings.width,
      height: settings.height,
    });
  }, [settings]);

  useEffect(() => {
    updateContainerSize();
  }, [gridRef]);

  return (
    <div className="relative flex">
      <div
        className={`bg-white shadow-lg overflow-hidden`}
        style={containerStyle}
      >
        <GridLayout
          innerRef={mergeRefs(gridRef, printRef)}
          className="layout"
          style={{
            // backgroundColor: "red",
          }}
          layout={items}
          cols={1}
          rowHeight={ROW_HEIGHT}
          width={containerSize.width * CM2MM}
          onLayoutChange={updateContainerSize}
          margin={[settings.itemSpacing * CM2MM, settings.itemSpacing * CM2MM]}
          containerPadding={[settings.margin * CM2MM, settings.margin * CM2MM]}
        >
          {items.map((item) => {
            return (
              <div
                key={item.i}
                className="hover:bg-gray-200 transition-colors"
                style={itemStyle}
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
