"use client";

import GridLayout from "react-grid-layout";
import { GridItem } from "@/core/types";

import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";

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

export const BasicGrid = ({ settings, items }: BasicGridProps) => {
  const containerStyle = {
    width: `${settings.width}cm`,
    height: `${settings.height}cm`,
    padding: `${settings.margin}cm`,
  };

  return (
    <div className="relative flex">
      <div
        className={`bg-white rounded-lg shadow-lg overflow-hidden`}
        style={containerStyle}
      >
        <GridLayout
          className="layout"
          layout={items}
          cols={1}
          rowHeight={30}
          width={settings.width * 37.8}
          onLayoutChange={() => {}}
          margin={[settings.itemSpacing * 37.8, settings.itemSpacing * 37.8]}
          containerPadding={[settings.margin * 37.8, settings.margin * 37.8]}
        >
          {items.map((item) => {
            return (
              <div
                key={item.i}
                className="bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                style={{ lineHeight: `${settings.lineHeight}cm` }}
              >
                <div className="flex items-center p-3">
                  <span className="text-gray-800">{item.content}</span>
                </div>
              </div>
            );
          })}
        </GridLayout>
      </div>
    </div>
  );
};
