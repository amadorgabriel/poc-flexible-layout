import { useLabelContext } from "@/core/contexts/LabelContext";
import { Grid } from "../../Grid";

export const StaticContainer = () => {
  const { container } = useLabelContext();

  return (
    <div
      className="static-container"
      style={{
        width: container.dimensions.width,
        height: container.dimensions.height,
      }}
    >
      <Grid />
    </div>
  );
};
