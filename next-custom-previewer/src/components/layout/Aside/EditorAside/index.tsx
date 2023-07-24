import React, { ChangeEvent } from "react";
import { Form, useFormikContext } from "formik";
import { useBlockContext } from "@/contexts/BlockContext";

import { Input } from "@/components/Input";
import styles from "@/components/layout/Aside/Aside.module.css";

export interface EditorAsideProps {
  x: number;
  y: number;
  width: number;
  height: number;
  isBlocked: boolean;
}

export const EditorAside = () => {
  const { containerBlock, setBlockContainer } = useBlockContext();
  const { values, setFieldValue } = useFormikContext<EditorAsideProps>();

  return (
    <React.Fragment>
      <div className={styles.asideContent}>
        <Form onSubmit={() => {}} className={styles.subContent}>
          <fieldset>
            <label htmlFor="isBlocked">Bloqueado:</label>
            <input
              id="isBlocked"
              type="checkbox"
              checked={values.isBlocked}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFieldValue("isBlocked", e.target.checked);
                setBlockContainer({
                  ...containerBlock,
                  isBlocked: e.target.checked,
                });
              }}
            />
          </fieldset>

          <Input.Text
            id="width"
            label="Largura:"
            type="number"
            placeholder="Insira um valor"
            value={values.width ?? containerBlock.initialSize.width}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFieldValue("width", Number(e.target.value));
            }}
            onEnter={() => {
              setBlockContainer({
                ...containerBlock,
                width: values.width,
              });
            }}
          />

          <Input.Text
            label="Altura"
            id="height"
            type="number"
            placeholder="insira um valor"
            value={values.height ?? containerBlock.initialSize.height}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFieldValue("height", Number(e.target.value));
            }}
            onEnter={() => {
              setBlockContainer({
                ...containerBlock,
                height: values.height,
              });
            }}
          />
        </Form>
      </div>

      <div className={(styles.asideContent, styles.properties)}>
        <h3>Propriedades</h3>

        <div className={styles.subContent}>
          <p style={{ marginBottom: "0.75rem" }}>Nome: {containerBlock.name}</p>

          <div style={{ marginBottom: "0.75rem" }}>
            <b>Dimensões</b>
            <p>
              Width: {containerBlock.width ?? containerBlock.initialSize.width}
              px
            </p>
            <p>
              Height:{" "}
              {containerBlock.height ?? containerBlock.initialSize.height}
              px
            </p>
          </div>

          <div style={{ marginBottom: "0.75rem" }}>
            <b>Posição</b>
            <p>
              Delta X: {containerBlock.x ?? containerBlock.initialPosition.x}px
            </p>
            <p>
              Delta Y: {containerBlock.y ?? containerBlock.initialPosition.y}px
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
