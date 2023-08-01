import React from "react";
import { EditorAside } from "./EditorAside";

interface AsideProps {
  title: string;
  children: React.ReactNode;
}

const Wrapper = ({ title, children }: AsideProps) => {
  return (
    <aside className="asideContainer">
      <h2>{title}</h2>

      <div className="asideContent">{children}</div>
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
