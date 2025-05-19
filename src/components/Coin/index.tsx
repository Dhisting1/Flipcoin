import { Cara } from "../Icons/Cara";
import { Coroa } from "../Icons/Coroa";
import { Shadow } from "../Icons/Shadow";
import styles from "./styles.module.css";
import { Button } from "../Button";
import { useState } from "react";

export function Coin() {
  const [result, setResult] = useState<"Heads" | "Tails">("Heads");
  const [isFlipping, setIsFlipping] = useState(false);

  const handleResult = () => {
    if (isFlipping) return;

    setIsFlipping(true);

    setTimeout(() => {
      const randomResult = Math.random() < 0.5 ? "Heads" : "Tails";
      console.log(randomResult);
      setResult((prev) => (prev === randomResult ? "Tails" : "Heads"));
      setIsFlipping(false);
    }, 1000);
    console.log(result);
    console.log(isFlipping);
  };

  return (
    <div className={styles.content}>
      <div className={`${styles.coin} ${isFlipping ? styles.flipping : ""}`}>
        {result === "Heads" ? <Cara /> : <Coroa />}
      </div>
      <Shadow />
      <p className={styles.result}>{result === "Heads" ? "Heads" : "Tails"}</p>
      <Button onClick={handleResult} />
    </div>
  );
}
