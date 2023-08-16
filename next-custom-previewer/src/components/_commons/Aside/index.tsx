import React, { ChangeEvent } from "react";
import { Form, useFormikContext } from "formik";
import { FormikValuesProps } from "@/pages/_app";

import { Input } from "@/components/_commons/Input";
import { Accordion } from "@/components/_commons/Accordion";
import { useLabelContext } from "@/core/contexts/LabelContext";
import { ContentGroupAccordion } from "@/components/EditorAside/ContentGroupAccordion";

export const Aside = () => {
  const { pages, contentGroups } = useLabelContext();
  const { values, setFieldValue, errors, touched } =
    useFormikContext<FormikValuesProps>();

  return (
    <aside className="aside-container">
      <h2>Editor</h2>

      <div className="aside-content">
        <Form onSubmit={() => {}}>
          {/* <Accordion title={container.name}>
            <Input.Text
              id="width"
              label="Largura (px)"
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
                setContainer({
                  ...container,
                  dimensions: {
                    ...container.dimensions,
                    width: values.width,
                  },
                });
              }}
            />

            <Input.Text
              label="Altura (px)"
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
                setContainer({
                  ...container,
                  dimensions: {
                    ...container.dimensions,
                    height: values.height,
                  },
                });
              }}
            />

            <h4>Grid Interno</h4>

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
                setContainer({
                  ...container,
                  cols: {
                    ...container.cols,
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

            <Input.Text
              label="Espaçamento entre linhas (px)"
              id="rowGap"
              type="number"
              min={1}
              placeholder="Insira um valor"
              value={values.rowGap}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFieldValue("rowGap", Number(e.target.value));
              }}
              onEnter={() => {
                setContainer({
                  ...container,
                  cols: {
                    ...container.cols,
                    rowGap: values.rowGap,
                  },
                });
              }}
              className={
                errors.rowGap && touched.rowGap ? "input-error" : undefined
              }
              errorMessage={errors.rowGap}
            />

            <Input.Text
              label="Espaçamento entre colunas (px)"
              id="colGap"
              type="number"
              min={1}
              placeholder="Insira um valor"
              value={values.colGap}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFieldValue("colGap", Number(e.target.value));
              }}
              onEnter={() => {
                setContainer({
                  ...container,
                  cols: {
                    ...container.cols,
                    colGap: values.colGap,
                  },
                });
              }}
              className={
                errors.colGap && touched.colGap ? "input-error" : undefined
              }
              errorMessage={errors.colGap}
            />

            <hr />

            <div className="aside-footer">
              <div>
                <b>Dimensões</b>
                <p>
                  Largura: {container.dimensions.width}
                  px
                </p>
                <p>
                  Altura: {container.dimensions.height}
                  px
                </p>
              </div>
            </div>
          </Accordion> */}

          <h4>Grupos de Conteúdo</h4>

          <div className="content-groups">
            {contentGroups.map((content) => (
              <ContentGroupAccordion
                key={content.id}
                contentGroupId={content.id}
                title={content.children.name}
                pinable
                hideable
                rotatable
              >
                <p>Teste</p>
              </ContentGroupAccordion>
            ))}
          </div>
        </Form>
      </div>
    </aside>
  );
};
