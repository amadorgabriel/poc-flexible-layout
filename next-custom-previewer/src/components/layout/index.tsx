import { Aside } from "./Aside";
import { Allotment } from "allotment";
import { Preview } from "@/components/Preview/index";

export const Layout = () => {
  return (
    <Allotment minSize={100}>
      {/* <Allotment.Pane maxSize={400} minSize={320}>
        <Aside.Layer />
      </Allotment.Pane> */}

      <Allotment.Pane>
        <Preview />
      </Allotment.Pane>

      <Allotment.Pane maxSize={400} minSize={320}>
        <Aside.Editor />
      </Allotment.Pane>
    </Allotment>
  );
};
