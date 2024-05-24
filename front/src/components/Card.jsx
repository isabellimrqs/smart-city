import React from "react";
import PresencaIcon from "../assets/presenca-icon.svg";
import LuminosidadeIcon from "../assets/luminosidade-icon.svg";
import UmidadeIcon from "../assets/umidade-icon.svg";
import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.singleCardContainer}>
        <div className={styles.card}>
          <img className={styles.icon} src={PresencaIcon} alt="Presença" />
          <p className={styles.title}>Presença</p>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.card}>
          <img  className={styles.icon} src={UmidadeIcon} alt="Umidade" />
          <p  className={styles.title}>Umidade</p>
        </div>
        <div className={styles.card}>
          <img className={styles.icon} src={LuminosidadeIcon} alt="Luminosidade" />
          <p  className={styles.title}>Luminosidade</p>
        </div>
      </div>
    </div>
  );
}
