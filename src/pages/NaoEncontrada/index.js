import React from "react";
import styles from "./NaoEncontrada.module.css";

export default function NaoEncontrada() {
  return (
    <section className={styles.container}>
      <h2>Ops!</h2>
      <p>A página que você está procurando não existe ou foi removida.</p>
    </section>
  );
}
