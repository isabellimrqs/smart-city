import React from "react";
import styles from './Header.module.css'

export default function Header(){
    return(
        <header className={styles.header}>
        <div className={styles.logo}>Meu App</div>
        <nav className={styles.nav}>
          <ul>
            <li>Sensores</li>
            <li>Todos os Sensores</li>
            <li>Cadastro</li>
            <li>Mapa</li>
          </ul>
        </nav>
      </header>
    )
}