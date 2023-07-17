import styles from "@/styles/Preview.module.css";

export const Node = ({ text }: any) => {
  return (
    <div className={styles.gridWrapper}>
      <div className={styles.gridItem}>{text}</div>
    </div>
  );
};
