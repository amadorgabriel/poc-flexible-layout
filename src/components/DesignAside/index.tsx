import { ChangeEvent, useEffect } from "react";
import { useBlockContext } from "@/contexts/BlockContext";
import { Field, Form, useFormikContext } from "formik";

import styles from "@/styles/Aside.module.css";

export interface DesignAsideProps {
  width: number;
  height: number;
  isBlocked: boolean;
}

export const DesignAside = () => {
  const { containerBlock, initialContainerBlock, setBlockContainer } =
    useBlockContext();

  const { values, setFieldValue, setValues } =
    useFormikContext<DesignAsideProps>();

  // setInitialState
  useEffect(() => {
    setValues({
      width: containerBlock.width || initialContainerBlock.initialSize.width,
      height: containerBlock.height || initialContainerBlock.initialSize.height,
      isBlocked:
        !!containerBlock.isBlocked || !!initialContainerBlock.isBlocked,
    });
  }, [containerBlock, initialContainerBlock, setValues]);

  const handleSubmit = () => {
    setBlockContainer({
      ...containerBlock,

      width: Number(values.width),
      height: Number(values.height),

      isBlocked: values.isBlocked,
    });
  };

  return (
    <aside className={styles.container}>
      <h2>Editor</h2>

      <div className={(styles.content, styles.form)}>
        <h3>Design</h3>

        <Form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="isBlocked">Bloqueado:</label>
            <Field
              id="isBlocked"
              type="checkbox"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFieldValue("isBlocked", e.target.checked);
                console.log(e.target.checked);
              }}
            />

            <label htmlFor="width">Largura:</label>
            <Field
              id="width"
              type="number"
              value={values.width}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFieldValue("width", Number(e.target.value));
              }}
              placeholder="Insira um valor"
            />

            <label htmlFor="height">Altura:</label>
            <Field
              id="height"
              type="number"
              value={values.height}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFieldValue("height", Number(e.target.value));
              }}
              placeholder="insira um valor"
            />

            <button type="submit">Salvar</button>
          </fieldset>
        </Form>
      </div>

      <hr></hr>

      <div className={(styles.content, styles.props)}>
        <h3>Propriedades</h3>
        <div>
          <p>
            <i>Bloco: {containerBlock.name}</i>
          </p>
          <p>
            <i>
              Width:{" "}
              {containerBlock.width || initialContainerBlock.initialSize.width}
              px
            </i>
          </p>
          <p>
            <i>
              Height:
              {containerBlock.height ||
                initialContainerBlock.initialSize.height}
              px
            </i>
          </p>
        </div>
      </div>
    </aside>
  );
};
