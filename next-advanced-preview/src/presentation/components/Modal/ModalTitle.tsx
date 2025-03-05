import { X } from "lucide-react";
import { ModalTitleProps } from "./index.types";
import { Modal } from ".";

export const ModalTitle = ({ title }: ModalTitleProps) => {
  const { onClose } = Modal.useModal();

  return (
    <header className="flex justify-between">
      <h2 className="font-normal">{title}</h2>

      <button
        className="cursor-pointer rounded-sm hover:bg-slate-200 w-7 h-7 flex justify-center items-center p-1"
        onClick={onClose}
      >
        <X className="text-slate-600" />
      </button>
    </header>
  );
};
