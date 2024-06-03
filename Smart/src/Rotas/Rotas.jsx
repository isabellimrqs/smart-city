import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cabecalho } from '../Componentes/Cabecalho'; 
import ListaSensor from '../Paginas/Sensor';
import CadSensor from '../Paginas/CadastrarSensor';
import Localizacao from '../Componentes/Mapa';
import Filtro from '../Paginas/Filtro';
import { Inicial } from '../Paginas/Inicial'; 
import { Home } from '../Paginas/Home';
import {Login} from '../Paginas/Login'

export function Rotas() {
  return (
    <Router>
      <div>
        {/* <Cabecalho /> Renderiza o cabeçalho em todas as rotas */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} >
            <Route path="listasensor" element={<ListaSensor />} />
            <Route path="cadsensor" element={<CadSensor />} />
            <Route path="localizacao" element={<Localizacao />} />
            <Route path="filtro" element={<Filtro />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Rotas;
