import { Field, Form } from "formik";

import styles from "@/styles/ComponentsBar.module.css";

export const ComponentsBar = () => (
  <div className={styles.container}>
    <div className={(styles.content, styles.form)}>
      <h2>Componentes</h2>

      <Form>
        <h3>Blocos</h3>

        <fieldset>
          <label htmlFor="text">Texto:</label>
          <input id="text" placeholder="Insira um texto" />
          <button type="submit">Adicionar</button>
        </fieldset>

        <fieldset>
          <label htmlFor="image">Imagem:</label>
          <input id="image" type="file" placeholder="Escolha sua imagem" />

          <button type="submit">Adicionar</button>
        </fieldset>
      </Form>
    </div>
  </div>
);
