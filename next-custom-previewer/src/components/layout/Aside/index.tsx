import React from "react";
import { EditorAside } from "./Editor";

interface AsideProps {
  title: string;
  children: React.ReactNode;
}

const Wrapper = ({ title, children }: AsideProps) => {
  return (
    <aside className="aside-container">
      <h2>{title}</h2>

      <div className="aside-content">{children}</div>
    </aside>
  );
};

export const Aside = {
  Editor: () => (
    <Wrapper title="Editor">
      <EditorAside />
    </Wrapper>
  ),
};
