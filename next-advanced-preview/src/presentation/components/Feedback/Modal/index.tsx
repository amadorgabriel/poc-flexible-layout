import { createContext, useContext } from "react";

import { ModalTitle } from "./ModalTitle";
import { ModalFooter } from "./ModalFooter";
import { ModalContextProps, ModalProps } from "./index.types";
import { createPortal } from "react-dom";

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);
export const Modal = ({
  open = false,
  children,
  onOpen,
  onClose,
}: ModalProps) => {
  return (
    open &&
    createPortal(
      <ModalContext.Provider
        value={{
          onOpen,
          onClose,
        }}
      >
        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#4747478e] ">
            <div className="bg-white p-6 rounded-md shadow-lg w-[950px] border border-slate-800 space-y-4">
              {children}
            </div>
          </div>
        )}
      </ModalContext.Provider>,
      document.body
    )
  );
};

const useModal = () => {
  const context = useContext(ModalContext);

  return context;
};

Modal.Title = ModalTitle;
Modal.Footer = ModalFooter;

Modal.useModal = useModal;
