import { useMemo } from "react";

import { useEditor } from "@/presentation/context/EditorContext";

import { Modal } from "@/presentation/components/Modal";
import { ModalProps } from "@/presentation/components/Modal/index.types";
import { CircleAlert } from "lucide-react";

export default function EditionModal({
  open = false,
  onClose,
  onOpen,
}: Omit<ModalProps, "children">) {
  const { onChangeEditionMode } = useEditor();

  return (
    <Modal open={open} onClose={onClose} onOpen={onOpen}>
      <Modal.Title title="Deseja mesmo alterar o modo de edição para AVANÇADO?" />

      <section className="flex justify-center items-center py-4">
        <p>
          Essa ação é <b className="text-red-400 text-md">irreversível</b>.
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
