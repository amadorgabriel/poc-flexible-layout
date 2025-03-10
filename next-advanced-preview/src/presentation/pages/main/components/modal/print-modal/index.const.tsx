import { IPreviewElement } from "./index.types";
import { ReactNode } from "react";
import { IFileType } from "../../../../../context/PrintContext/index.types";

export const renderOptions = ["zpl", "bmp", "pdf", "svg", "png", "html"];

export const getPreviewElement = ({
  extension,
  options,
}: {
  extension: IFileType;
  options: Record<IFileType, { preview: ReactNode; onClick: () => void }>;
}) => {
  const previewElements: IPreviewElement = {
    zpl: {
      preview: options.svg.preview,
      button: {
        onClick: options.zpl.onClick,
        className:
          "cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md",
        children: "Baixar ZPL",
      },
    },
    svg: {
      preview: options.svg.preview,
      button: {
        onClick: options.svg.onClick,
        className:
          "cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md",
        children: "Baixar SVG",
      },
    },
    png: {
      preview: options.png.preview,
      button: {
        onClick: options.png.onClick,
        className:
          "cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md",
        children: "Baixar PNG",
      },
    },
    pdf: {
      preview: options.pdf.preview,
      button: {
        onClick: options.pdf.onClick,
        className:
          "cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md",
        children: "Baixar PDF",
      },
    },
    bmp: {
      preview: options.bmp.preview,
      button: {
        onClick: options.bmp.onClick,
        className:
          "cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md",
        children: "Baixar BMP",
      },
    },
    html: {
      preview: options.html.preview,
      button: {
        onClick: options.html.onClick,
        className:
          "cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md",
        children: "Imprimir HTML",
      },
    },
  };

  return previewElements[extension];
};
