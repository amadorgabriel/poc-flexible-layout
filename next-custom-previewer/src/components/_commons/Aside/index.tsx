import React from "react";
import { EditorPanel } from "./Editor";

export const Aside = () => {
  return (
    <aside className="aside-container">
      <h2>Editor</h2>

      <div className="aside-content">
        <EditorPanel />
      </div>
    </aside>
  );
};
