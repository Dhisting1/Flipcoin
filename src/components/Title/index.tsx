import styles from "./styles.module.css";
export function Title() {
  return (
    <>
      <h1 className={styles.title}>Flip the coin</h1>
      <p className={styles.text}>
        Press the coin or the button to flip the coin
      </p>
    </>
  );
}
