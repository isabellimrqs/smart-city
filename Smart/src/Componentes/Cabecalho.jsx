
import React from 'react';
import { Link } from 'react-router-dom';
import estilos from './Cabecalho.module.css';
import Logo from '../assets/logo.svg';

export function Cabecalho() {
    return (
        <header className={estilos.container}>
            <a href="/home">
            <img src={Logo} alt="Logo" />
            </a>
            <div className={estilos.opcoes}>
                <Link className={estilos.link} to="/listasensor">Lista Sensores</Link>
                <Link className={estilos.link} to="/cadsensor">Cadastro</Link>
                <Link className={estilos.link} to="/localizacao">Mapa</Link>
                <Link className={estilos.link} to="/filtro">Filtros</Link>
            </div>
        </header>
    );
}
