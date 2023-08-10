import { Grid } from "./Grid";
import { useLabelContext } from "@/core/contexts/LabelContext";

export const Canvas = () => {
  const { container } = useLabelContext();

  return (
    <div className="canvas">
      <div
        className="static-container"
        style={{
          width: container.dimensions.width,
          height: container.dimensions.height,
        }}
      >
        <Grid />
      </div>
    </div>
  );
};
