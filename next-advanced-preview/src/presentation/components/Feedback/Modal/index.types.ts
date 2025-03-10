import { ButtonHTMLAttributes,  ReactNode } from "react";

export interface ModalFooterProps {
  otherButtons?: ButtonHTMLAttributes<HTMLButtonElement>[];
  okButton: ButtonHTMLAttributes<HTMLButtonElement>;
  cancelButton?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export interface ModalTitleProps {
  title: string;
}

export interface ModalProps {
  children: ReactNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export interface ModalContextProps {
  onOpen: () => void;
  onClose: () => void;
}
