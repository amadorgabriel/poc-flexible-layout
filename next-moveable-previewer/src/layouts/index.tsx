import { Allotment } from "allotment";
import { Artboard } from "@/components/Artboard";
import { LayerAside } from "@/layouts/LayerAside";
import { DesignAside } from "@/layouts/DesignAside";

export const Layout = () => {
  return (
    <Allotment minSize={100}>
      <Allotment.Pane maxSize={400} minSize={200}>
        <LayerAside />
      </Allotment.Pane>

      <Allotment.Pane>
        <Artboard />
      </Allotment.Pane>

      <Allotment.Pane maxSize={400} minSize={200}>
        <DesignAside />
      </Allotment.Pane>
    </Allotment>
  );
};
