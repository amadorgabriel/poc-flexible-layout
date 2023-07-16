export type ContainerBlock = {
  name: string
  width?: number;
  height?: number;
  x?: number;
  y?: number;
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

export type CommomBlock = {
  name: string
  width: number;
  height: number;

  text?: string;
  image?: string;
  isBlocked?: boolean;
  isVisible?: boolean;
};
