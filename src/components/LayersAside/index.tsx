import { Form } from "formik";

import { Layer } from "./Layer.component";

import stylesAside from "@/styles/Aside.module.css";
import stylesLayerAside from "@/styles/LayersAside.module.css";

const styles = {
  ...stylesLayerAside,
  ...stylesAside,
};

export const LayersAside = () => (
  <aside className={styles.container}>
    <h2>Componentes</h2>

    <div className={(styles.content, styles.form)}>
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

    <div className={(styles.content, styles.form)}>
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
  </aside>
);
