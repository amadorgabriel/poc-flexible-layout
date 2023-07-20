import { Allotment } from "allotment";
import { LayerAside } from "@/layouts/LayerAside";
import { DesignAside } from "@/layouts/DesignAside";
import { Preview } from "@/components/Preview/index";

export const Layout = () => {
  return (
    <Allotment minSize={100}>
      <Allotment.Pane maxSize={400} minSize={200}>
        <LayerAside />
      </Allotment.Pane>

      <Allotment.Pane>
        <Preview />
      </Allotment.Pane>

      <Allotment.Pane maxSize={400} minSize={200}>
        <DesignAside />
      </Allotment.Pane>
    </Allotment>
  );
};
