import React, { ChangeEvent } from "react";
import { Form, useFormikContext } from "formik";
import { FormikValuesProps } from "@/pages/_app";

import { Input } from "@/components/Input";
import { useBlockContext } from "@/contexts/BlockContext";
import styles from "@/components/layout/Aside/Aside.module.css";

export const EditorAside = () => {
  const { containerBlock, setBlockContainer } = useBlockContext();
  const { values, setFieldValue, errors, touched } =
    useFormikContext<FormikValuesProps>();

  return (
    <React.Fragment>
      <div className={styles.asideContent}>
        <h3> {containerBlock.name}</h3>

        <Form onSubmit={() => {}} className={styles.subContent}>
          {/* <fieldset>
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
          </fieldset> */}

          <Input.Text
            id="width"
            label="Largura"
            type="number"
            placeholder="Insira um valor"
            value={values.width}
            className={
              errors.width && touched.width ? "input-error" : undefined
            }
            errorMessage={errors.width}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFieldValue("width", Number(e.target.value));
            }}
            onEnter={() => {
              setBlockContainer({
                ...containerBlock,
                dimensions: {
                  ...containerBlock.dimensions,
                  width: values.width,
                },
              });
            }}
          />

          <Input.Text
            label="Altura"
            id="height"
            type="number"
            placeholder="Insira um valor"
            value={values.height}
            className={
              errors.height && touched.height ? "input-error" : undefined
            }
            errorMessage={errors.height}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFieldValue("height", Number(e.target.value));
            }}
            onEnter={() => {
              setBlockContainer({
                ...containerBlock,
                dimensions: {
                  ...containerBlock.dimensions,
                  height: values.height,
                },
              });
            }}
          />

          <Input.Text
            label="Colunas"
            id="columnAmount"
            type="number"
            min={1}
            placeholder="Insira um valor"
            value={values.colsAmount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFieldValue("colsAmount", Number(e.target.value));
            }}
            onEnter={() => {
              setBlockContainer({
                ...containerBlock,
                cols: {
                  ...containerBlock.cols,
                  amount: values.colsAmount,
                },
              });
            }}
          />
        </Form>

        <div className={styles.properties}>
          <div className={styles.subContent}>
            <div style={{ marginBottom: "0.75rem" }}>
              <b>Dimensões</b>
              <p>
                Largura: {containerBlock.dimensions.width}
                px
              </p>
              <p>
                Altura: {containerBlock.dimensions.height}
                px
              </p>
            </div>

            <div style={{ marginBottom: "0.75rem" }}>
              <b>Posição</b>
              <p>
                Pos. X: {containerBlock.position.x}
                px
              </p>
              <p>
                Pos. Y: {containerBlock.position.y}
                px
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
