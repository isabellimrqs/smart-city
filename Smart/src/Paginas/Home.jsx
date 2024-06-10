import React from "react";
import { Cabecalho } from "../Componentes/Cabecalho";
import styles from "../Paginas/Home.module.css";

export function Home() {
  const username = localStorage.getItem('username')


  return (
    <div>
      <Cabecalho />
      <div className={styles.container}>
        <div className={styles.textos}>
          <h1 className={styles.textoInicial}>Bem vindo à SmartCity, {username}! </h1>
          <h1 className={styles.textoInicial}>Sua plataforma inteligente </h1>
        </div>
      </div>

      <div className={styles.cards}>
        

      </div>



    </div>
  );
}
