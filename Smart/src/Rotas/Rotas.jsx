import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaSensor from '../Paginas/Sensor';
import CadSensor from '../Paginas/CadastrarSensor';
import Localizacao from '../Paginas/Localizacao';
import Filtro from '../Paginas/Filtro';
import { Home } from '../Paginas/Home';
import {Login} from '../Paginas/Login'

export function Rotas() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/listasensor" element={<ListaSensor />} />
          <Route path="/cadsensor" element={<CadSensor />} />
          <Route path="/localizacao" element={<Localizacao />} />
          <Route path="/filtro" element={<Filtro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Rotas;
