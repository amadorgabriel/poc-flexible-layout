import { ReactNode, RefObject } from "react";

export type IFileType = "zpl" | "bmp" | "png" | "pdf" | "svg" | "html";

export type IPrintSettings = {
  columnAmount: number;
  ribbonWidth: number;
  ribbonHeight: number;
};

export type DownloadOption = {
  blob: Blob;
  filename: string;
  extension: IFileType;
};

export interface PrintContextProps {
  printRef: RefObject<HTMLDivElement | null>;
  printSettings: IPrintSettings;

  onPrint: () => void;
  onDownloadFile: ({
    blob,
    filename,
    extension,
  }: DownloadOption) => Promise<void>;

  onChangePrintSettings: (field: keyof IPrintSettings, value: number) => void;
}

export interface PrintProviderProps {
  children: ReactNode;
}
