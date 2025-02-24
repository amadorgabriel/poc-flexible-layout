import Moveable from "react-moveable";
import React, { useRef, useEffect, useState } from "react";

interface LabelItemProps {
  content: string;
  //   isSelected: boolean;
  //   onSelect: () => void;
    // containerRef: React.RefObject<HTMLDivElement>;
  initialPosition?: { x: number; y: number };
}

const LabelItem: React.FC<LabelItemProps> = ({
  content,
  //   isSelected,
  //   onSelect,
    // containerRef,
  initialPosition = { x: 0, y: 0 },
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState({ width: 200, height: 40 });

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

  return (
    <>
      <div
        ref={targetRef}
        className={`absolute bg-white p-2 rounded shadow-sm cursor-move`}
        // onClick={onSelect}
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        {content}
      </div>

      <Moveable
        target={targetRef.current}
        //   container={containerRef.current}
        draggable={true}
        resizable={true}
        snappable={true}
        bounds={{
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          position: "css",
        }}
        onDrag={({ target, transform, beforeTranslate: [x, y] }) => {
          target.style.transform = transform;
          setPosition({ x, y });
        }}
        onResize={({ target, width, height, drag: { beforeTranslate } }) => {
          const [x, y] = beforeTranslate;
          target.style.width = `${width}px`;
          target.style.height = `${height}px`;
          target.style.transform = `translate(${x}px, ${y}px)`;

          setSize({ width, height });
          setPosition({ x, y });
        }}
        padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
      />
    </>
  );
};

export default LabelItem;
