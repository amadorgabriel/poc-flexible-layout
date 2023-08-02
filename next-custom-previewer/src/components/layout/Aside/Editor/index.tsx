import React, { ChangeEvent } from "react";
import { Form, useFormikContext } from "formik";
import { FormikValuesProps } from "@/pages/_app";

import { Input } from "@/components/_commons/Input";
import { useBlockContext } from "@/contexts/BlockContext";
import { Accordion } from "@/components/_commons/Accordion";

export const EditorAside = () => {
  const { containerBlock, setBlockContainer, gridLayout } = useBlockContext();
  const { values, setFieldValue, errors, touched } =
    useFormikContext<FormikValuesProps>();

  return (
    <div>
      <Form onSubmit={() => {}}>
        <Accordion title={containerBlock.name}>
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
            id="colsAmount"
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
                  amount: values.colsAmount,
                },
              });
            }}
            className={
              errors.colsAmount && touched.colsAmount
                ? "input-error"
                : undefined
            }
            errorMessage={errors.colsAmount}
          />

          <hr />

          <div className="aside-footer">
            <div>
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

            <div>
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
        </Accordion>

        <h4>Grupos de Conteúdo</h4>
        <div className="content-groups">
          {gridLayout.map((grid, index) => (
            <Accordion title={`Grupo ${grid.i}`} key={index}>
              <p>{grid.i}</p>
            </Accordion>
          ))}
        </div>
      </Form>
    </div>
  );
};
