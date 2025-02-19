import { Settings } from "lucide-react";

import { useEditor } from "@/presentation/context/EditorContext";
import { IEditorMode } from "@/presentation/context/EditorContext/index.types";

export const LabelAside = () => {
  const { mode, onChangeMode } = useEditor();

  const _onChangeMode = (value: IEditorMode) => {
    onChangeMode(value);
  };

  return (
    <aside className="border border-slate-600 p-4 rounded-md bg-white space-y-2 h-full w-[300px]">
      <h2 className="text-xl font-bold flex">
        <Settings className="mr-2" />
        Funcionalidades:
      </h2>

      <section>
        <h4 className="font-bold">Modo de edição:</h4>

        <form className="flex flex-col items-start">
          <fieldset id="mode">
            <div className="space-x-1">
              <input
                type="radio"
                name="mode"
                id="basic"
                value="basic"
                checked={mode === "basic"}
                onChange={(e) =>
                  _onChangeMode(e.target.checked ? "basic" : "advanced")
                }
              />
              <label htmlFor="basic">Básico</label>
            </div>

            <div className="space-x-1">
              <input
                type="radio"
                name="mode"
                id="advanced"
                checked={mode === "advanced"}
                value="advanced"
                onChange={(e) =>
                  onChangeMode(e.target.checked ? "advanced" : "basic")
                }
              />
              <label htmlFor="advanced">Avançado</label>
            </div>
          </fieldset>
        </form>
      </section>
    </aside>
  );
};
