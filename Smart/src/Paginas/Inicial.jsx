import React from 'react';
import { Cabecalho } from '../Componentes/Cabecalho';


export function Inicial() {
    return (
        <div className={estilos.gridConteiner}>
            <Cabecalho />
            <Outlet />
        </div>
    );
}
