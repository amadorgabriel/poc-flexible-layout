import { Modal } from ".";
import { ModalFooterProps } from "./index.types";

export const ModalFooter = ({
  otherButtons,
  okButton,
  cancelButton,
}: ModalFooterProps) => {
  const { onClose } = Modal.useModal();

  return (
    <footer
      className={`flex w-full ${
        otherButtons ? "justify-between" : "justify-end"
      }`}
    >
      {otherButtons && (
        <div className="flex space-x-2">
          {otherButtons.map((currBtn, index) => {
            return (
              <button key={index} {...currBtn}>
                {currBtn.children}
              </button>
            );
          })}
        </div>
      )}

      <div className="flex space-x-2">
        {!cancelButton && (
          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-2 border border-red-400 text-red-400 hover:underline rounded-md"
          >
            Cancelar
          </button>
        )}

        <button {...okButton} />
      </div>
    </footer>
  );
};
