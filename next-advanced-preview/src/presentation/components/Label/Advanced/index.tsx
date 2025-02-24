import React, { CSSProperties, useRef, useState } from "react";

import Moveable from "react-moveable";

import { LabelData } from "@/core/domain/Label";
import { createItemsFromLabelData } from "@/core/data/adapters/labelAdvaced.adapter";

import { ContainertLabel } from "../../Canvas/index.types";
interface AdvancedLabelProps {
  items: LabelData;
  settings: ContainertLabel["settings"];
}

export const AdvancedLabel = ({ settings, items }: AdvancedLabelProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedTarget, setSelectedTarget] = useState<HTMLElement | null>(
    null
  );
  const data = createItemsFromLabelData(items);

  // Calculate initial positions
  const getInitialPosition = (index: number) => {
    const itemsPerColumn = Math.ceil(data.length / 1);
    const column = Math.floor(index / itemsPerColumn);
    const row = index % itemsPerColumn;

    return {
      left: 10 + column * 180,
      top: 10 + row * 40,
    };
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    setSelectedTarget(target);
  };

  const containerStyle: CSSProperties = {
    width: `${settings.width}cm`,
    height: `${settings.height}cm`,
  };

  return (
    <div
      className="relative bg-white border border-gray-200 rounded-lg"
      style={containerStyle}
    >
      <div ref={containerRef} className="relative w-full h-full p-4">
        {data.map((item, index) => {
          const position = getInitialPosition(index);
          return (
            <div
              key={item.id}
              className={`moveable-item absolute p-1 cursor-move transition-colors ${
                item.id
              } ${selectedTarget?.dataset.id === item.id ? "bg-blue-50" : ""}`}
              style={{
                left: `${position.left}px`,
                top: `${position.top}px`,
                // maxWidth: "170px",
              }}
              onClick={handleClick}
              data-id={item.id}
            >
              <span className="text-sm">{item.content}</span>
            </div>
          );
        })}

        {selectedTarget && (
          <Moveable
            target={selectedTarget}
            draggable={true}
            resizable={true}
            snappable={true}
            bounds={{ left: 0, top: 0, right: 0, bottom: 0, position: "css" }}
            elementGuidelines={data.map((item) => {
              return `.${item.id}`;
            })}
            origin={false}
            padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
            onDrag={({ target, transform }) => {
              if (target) {
                target.style.transform = transform;
              }
            }}
            onResize={({ target, width, height, delta }) => {
              if (target) {
                delta[0] && (target.style.width = `${width}px`);
                delta[1] && (target.style.height = `${height}px`);
              }
            }}
            onClickGroup={({ inputEvent }) => {
              if (inputEvent.target === containerRef.current) {
                setSelectedTarget(null);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};
