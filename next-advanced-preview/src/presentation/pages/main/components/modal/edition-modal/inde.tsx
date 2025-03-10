import { useEditor } from "@/presentation/context/EditorContext";

import { Modal } from "@/presentation/components/Feedback/Modal";
import { ModalProps } from "@/presentation/components/Feedback/Modal/index.types";

export default function EditionModal({
  open = false,
  onClose,
  onOpen,
}: Omit<ModalProps, "children">) {
  const { onChangeEditionMode } = useEditor();

  return (
    <Modal open={open} onClose={onClose} onOpen={onOpen} className="w-[650px]">
      <Modal.Title title="Deseja mesmo alterar o modo de edição para AVANÇADO?" />

      <section className="flex justify-center items-center py-4">
        <p>
          Tipo de ação: <b className="text-red-400 text-md">IRREVERSÍVEL</b>
        </p>
      </section>

      <Modal.Footer
        okButton={{
          onClick: () => {
            onChangeEditionMode("advanced");
            onClose();
          },
          className:
            "cursor-pointer px-4 py-2 border border-black text-black hover:underline rounded-md",
          children: "Prosseguir",
        }}
      ></Modal.Footer>
    </Modal>
  );
}
