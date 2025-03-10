import { IFileType } from "@/presentation/context/PrintContext/index.types";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type IPreviewElement = {
  [key in IFileType]: {
    preview: ReactNode;
    button: ButtonHTMLAttributes<HTMLButtonElement>;
  };
};
