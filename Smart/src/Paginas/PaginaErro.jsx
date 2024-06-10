import React from "react";
import styles from "./PaginaErro.module.css";

function PaginaErro({ mensagem }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerErro}>
        <h2>Ocorreu um erro 🤕</h2>
        <p>{mensagem}</p>
        <p>Por favor, realize o login novamente...</p>
      </div>
    </div>
  );
}

export default PaginaErro;
