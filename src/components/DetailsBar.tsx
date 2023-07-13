import styles from "@/styles/DetailsBar.module.css";

export const DetailsBar = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h2>Editor</h2>

      <fieldset>
        <label htmlFor="width">Largura:</label>
        <input id="width" type="number" placeholder="Insira um valor" />
      </fieldset>

      <fieldset>
        <label htmlFor="height">Altura:</label>
        <input id="height" type="number" placeholder="insira um valor" />
      </fieldset>
    </div>
  </div>
);
