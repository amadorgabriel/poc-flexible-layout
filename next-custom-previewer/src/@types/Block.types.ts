export type ContainerBlock = {
  name: string;
  width: number;
  height: number;
  x: number | null;
  y: number | null;
  initialPosition: {
    x: number;
    y: number;
  };
  isBlocked?: boolean;
};
