import styles from "./Inicial.module.css";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Sensores from "./Sensores";

export function Inicial() {
  return (
    <>
      <Header />
      <Sensores/>
      <Outlet />
    </>
  );
}
