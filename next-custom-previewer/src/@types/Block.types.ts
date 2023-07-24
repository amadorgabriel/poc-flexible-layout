export type ContainerBlock = {
  name: string;
  width: number | null;
  height: number | null;
  x: number | null;
  y: number | null;
  initialPosition: {
    x: number;
    y: number;
  };
  initialSize: {
    width: number;
    height: number;
  };
  isBlocked?: boolean;
};
