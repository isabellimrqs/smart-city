
import React from 'react';
import { Link } from 'react-router-dom';
import estilos from './Cabecalho.module.css';
import Logo from '../assets/logo.svg';

export function Cabecalho() {
    return (
        <header className={estilos.container}>
            <img src={Logo} alt="Logo" />
            <div className={estilos.opcoes}>
                <Link to="/inicial/listasensor">Lista Sensores</Link>
                <Link to="/inicial/cadsensor">Cadastro</Link>
                <Link to="/inicial/localizacao">Mapa</Link>
                <Link to="/inicial/filtro">Filtros</Link>
            </div>
        </header>
    );
}
