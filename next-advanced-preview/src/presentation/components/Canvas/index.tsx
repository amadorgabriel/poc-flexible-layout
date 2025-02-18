import React from "react";

import { useEditor } from "@/presentation/context/EditorContext";

import { BasicCanvas } from "./Basic";
import { AdvancedCanvas } from "./Advanced";
import { IEditorMode } from "@/presentation/context/EditorContext/index.types";

const Canvas = () => {
  const { mode, onChangeMode } = useEditor();

  const _onChangeMode = (value: IEditorMode) => {
    onChangeMode(value);
  };

  return (
    <div className="h-screen grid gap-4 grid-cols-5 p-4">
      <div className="col-span-4 flex items-center justify-center">
        {mode === "basic" ? <BasicCanvas /> : <AdvancedCanvas />}
      </div>

      <aside className="col-span-1 border border-slate-300 p-4 rounded-md bg-slate-100 space-y-2 shadow">
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
    </div>
  );
};

export default Canvas;
