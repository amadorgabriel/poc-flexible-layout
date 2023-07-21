import React from "react";
import { Form } from "formik";
import { Layer } from "./Layer.component";

import styles from "@/components/layout/Aside/Aside.module.css";

export const LayerAside = () => (
  <React.Fragment>
    <div className={(styles.asideContent, styles.form)}>
      <h3 className={styles.asterisk}>Blocos Fixos</h3>

      <div className={styles.layers}>
        <Layer text={"Empresa 1"} />
        <Layer text={"Empresa 2"} />
        <Layer
          image={{
            url: "~/src/assets/img/label-pro.png",
            name: "Logo Etiqueta Certa",
          }}
        />
      </div>
    </div>

    <hr></hr>

    <div className={(styles.asideContent, styles.form)}>
      <Form>
        <h3>Novo Bloco</h3>

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
  </React.Fragment>
);
