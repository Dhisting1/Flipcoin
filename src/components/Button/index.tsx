import styles from "./styles.module.css";

type ButtonProps = {
  onClick: () => void;
};

export function Button({ onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      <span>Random</span>
    </button>
  );
}
