import React from "react";
import { LayerAside } from "./LayerAside";
import { EditorAside } from "./EditorAside";

import styles from "@/components/layout/Aside/Aside.module.css";

interface AsideProps {
  title: string;
  children: React.ReactNode;
}

const Wrapper = ({ title, children }: AsideProps) => {
  return (
    <aside className={styles.asideContainer}>
      <h2>{title}</h2>

      <div className={(styles.asideContent, styles.form)}>{children}</div>
    </aside>
  );
};

export const Aside = {
  Editor: () => (
    <Wrapper title="Editor">
      <EditorAside />
    </Wrapper>
  ),
  Layer: () => (
    <Wrapper title="Camadas">
      <LayerAside />
    </Wrapper>
  ),
};
