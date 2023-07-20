import Image from "next/image";
import React, { useRef } from "react";
import Moveable from "react-moveable";

import Logo from "@/assets/img/label-pro.png";
// import Puzzle from "@/assets/img/puzzle.svg";

export const Artboard = () => {
  const targetRef = useRef<HTMLImageElement>(null);
  const moveableRef = useRef<Moveable>(null);

  return (
    <div className="root">
      <div
        className="container"
        style={{
          left: "200px",
          top: "100px",
          width: "500px",
          height: "500px",
          border: "1px solid #ccc",
        }}
      >
        <div
          className="target element1"
          style={{
            width: "100px",
            height: "100px",
            left: "0px",
            top: "120px",
          }}
        >
          Element1
        </div>
        <div
          className="target element2"
          style={{
            width: "100px",
            height: "100px",
            left: "400px",
            top: "120px",
          }}
        >
          Element2
        </div>
        <div
          className="target element3"
          style={{
            width: "300px",
            height: "100px",
            top: "400px",
            left: "50px",
          }}
        >
          Element3
        </div>

        <Image alt="Logo" src={Logo} className="target" ref={targetRef} />

        <Moveable
          ref={moveableRef}
          target={targetRef}
          draggable={true}
          scalable={true}
          rotatable={true}
          snappable={true}
          isDisplaySnapDigit={true}
          isDisplayInnerSnapDigit={false}
          snapGap={true}
          snapDirections={{
            top: true,
            left: true,
            bottom: true,
            right: true,
            center: true,
            middle: true,
          }}
          elementSnapDirections={{
            top: true,
            left: true,
            bottom: true,
            right: true,
            center: true,
            middle: true,
          }}
          snapThreshold={5}
          // maxSnapElementGuidelineDistance={null}
          elementGuidelines={[".element1", ".element2", ".element3"]}
          onRender={(e) => {
            e.target.style.cssText += e.cssText;
          }}
          onSnap={(e) => {
            console.log(e.guidelines, e.elements);
          }}
          throttleDrag={1}
          edgeDraggable={false}
          startDragRotate={0}
          throttleDragRotate={0}
          keepRatio={true}
          throttleScale={0}
          renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
          throttleRotate={0}
          rotationPosition={"top"}
          originDraggable={true}
          originRelative={true}
          onDragOrigin={(e) => {
            e.target.style.transformOrigin = e.transformOrigin;
          }}
        />
      </div>
    </div>
  );
};
