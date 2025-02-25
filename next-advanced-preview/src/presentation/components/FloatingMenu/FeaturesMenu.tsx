import { Zap } from "lucide-react";

import { useEditor } from "@/presentation/context/EditorContext";

export const FeaturesMenu = () => {
  const { editionMode } = useEditor();

  return (
    <aside className="border border-slate-600 p-4 rounded-md bg-white space-y-2 h-full w-[400px]">
      <h3 className="text-sm font-medium flex items-center">
        <Zap className="mr-2" size={14} />
        Funcionalidades:
      </h3>

      <section>
        <label className="text-xs text-gray-600">Página:</label>

        {editionMode === "basic" ? (
          <form className="flex flex-col items-start">
            <div className="space-x-1">
              <input
                type="checkbox"
                name="mode"
                id="pa-1"
                value="pa-1"
                checked
                onChange={() => {}}
              />
              <label htmlFor="pa-1">Manipular dimensões da página</label>
            </div>
            <div className="space-x-1">
              <input
                type="checkbox"
                name="mode"
                id="pa-2"
                value="pa-2"
                checked
                onChange={() => {}}
              />
              <label htmlFor="pa-2">Layout Grid</label>
            </div>
          </form>
        ) : (
          <p className="italic">Não listado</p>
        )}
      </section>

      <section>
        <label className="text-xs text-gray-600">Item:</label>

        {editionMode === "basic" ? (
          <form className="flex flex-col items-start">
            <div className="space-x-1">
              <input
                type="checkbox"
                name="mode"
                id="b"
                value="b"
                checked
                onChange={() => {}}
              />
              <label htmlFor="b">Resize</label>
            </div>
            <div className="space-x-1">
              <input
                type="checkbox"
                name="mode"
                id="c"
                value="c"
                checked
                onChange={() => {}}
              />
              <label htmlFor="c">Arrastar dentro da página</label>
            </div>
            <div className="space-x-1">
              <input
                type="checkbox"
                name="mode"
                id="d"
                value="d"
                onChange={() => {}}
              />
              <label htmlFor="d">Arrastar para páginas diferentes</label>
            </div>
          </form>
        ) : (
          <p className="italic">Não listado</p>
        )}
      </section>
    </aside>
  );
};
