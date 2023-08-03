import { Container } from "./Container";

export const Canvas = () => {
  return (
    <div className="canvas">
      <Container.Draggable />

      {/* <Container.Static /> */}
    </div>
  );
};
