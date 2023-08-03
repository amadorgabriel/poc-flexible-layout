import { Aside } from "./Aside";
import { Canvas } from "../Canvas";
import { Allotment } from "allotment";

export const Layout = () => {
  return (
    <Allotment minSize={100}>
      <Allotment.Pane>
        <Canvas />
      </Allotment.Pane>

      <Allotment.Pane maxSize={400} minSize={320}>
        <Aside.Editor />
      </Allotment.Pane>
    </Allotment>
  );
};
