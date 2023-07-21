import React, { ChangeEvent, useEffect, useState } from "react";
import { Form, useFormikContext } from "formik";
import { useBlockContext } from "@/contexts/BlockContext";

import styles from "@/components/layout/Aside/Aside.module.css";
import { useDebounce } from "@/hooks/useDebounce";
import { Input } from "@/components/Input";

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

  const [currKey, setCurrKey] = useState<string>("");
  const [currValue, setCurrValue] = useState<string | number | boolean>("");
  const debouncedValue = useDebounce<string | number | boolean>(
    currValue,
    1000
  );

  const handleChange = (key: string, newValue: string | number | boolean) => {
    setFieldValue(key, newValue);

    setCurrKey(key);
    setCurrValue(newValue);
  };

  useEffect(() => {
    setBlockContainer({
      ...containerBlock,
      [currKey]: currValue,
    });
  }, [
    debouncedValue,
    currKey,
    containerBlock,
    setFieldValue,
    setBlockContainer,
    currValue,
  ]);

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
                handleChange("isBlocked", e.target.checked);
              }}
            />
          </fieldset>

          <Input.Text
            id="width"
            label="Largura:"
            type="number"
            placeholder="Insira um valor"
            value={values.width}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleChange("width", Number(e.target.value));
            }}
          />

          <Input.Text
            label="Altura"
            id="height"
            type="number"
            placeholder="insira um valor"
            value={values.height}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleChange("height", Number(e.target.value));
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
              Width: {containerBlock.width}
              px
            </p>
            <p>
              Height: {containerBlock.height}
              px
            </p>
          </div>

          <div style={{ marginBottom: "0.75rem" }}>
            <b>Posição</b>
            <p>Delta X: {containerBlock.x}px</p>
            <p>Delta Y: {containerBlock.y}px</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
