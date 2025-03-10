import { MoveableManagerInterface, Renderer } from "react-moveable";

export const DimensionViewable = {
  name: "dimensionViewable",
  props: [],
  events: [],
  render(moveable: MoveableManagerInterface<any, any>, React: Renderer) {
    const rect = moveable.getRect();

    return (
      <div
        key="dimension-viewer"
        className="moveable-dimension absolute"
        style={{
          left: `${rect.width / 2}px`,
          top: `${rect.height + 20}px`,
          willChange: "transform",
          transform: `translate(-50%, 0px)`,
        }}
      >
        {Math.round(rect.offsetWidth)} x {Math.round(rect.offsetHeight)}
      </div>
    );
  },
} as const;
