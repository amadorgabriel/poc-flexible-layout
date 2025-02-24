import { GridItem } from "@/core/types";

export interface ContainerSettings {
  width: number;
  height: number;
  itemSpacing: number;
  lineHeight: number;
  margin: number;
}

export interface ContainertLabel {
  id: string;
  settings: ContainerSettings;
  items: GridItem[];
}
