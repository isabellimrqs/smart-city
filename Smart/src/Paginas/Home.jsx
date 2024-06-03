import React from "react";
import { Cabecalho } from "../Componentes/Cabecalho";
import styles from "../Paginas/Home.module.css";

export function Home() {
  return (
    <div>
      <Cabecalho />
      <div className={styles.container}>
        <div className={styles.textos}>
          <h1 className={styles.textoInicial}>Olá usuário! </h1>
          <h1 className={styles.textoInicial}>O que deseja fazer hoje?</h1>
        </div>
      </div>

      <div className={styles.cards}>
        

      </div>



    </div>
  );
}
