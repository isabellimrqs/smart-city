import React, { useState } from 'react';
import axios from 'axios';
import estilos from './Filtro.module.css';
import { Cabecalho } from '../Componentes/Cabecalho';

export default function Filtro() {
    const [filters, setFilters] = useState({
        responsavel: '',
        status_operacional: false,
        tipo: '',
        localizacao: '',
    });

    const [sensors, setSensors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFilters({
            ...filters,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem('access_token');
            const response = await axios.post('http://127.0.0.1:8000/api/sensor_filter/', filters, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setSensors(response.data);
        } catch (error) {
            console.error('Error fetching sensors:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Cabecalho/>
        <div className={estilos.container}>

            <h1>Filtro de Sensores</h1>

            <form onSubmit={handleSubmit} className={estilos.formulario}>

                   
                    <input type="text" name="responsavel" value={filters.responsavel} onChange={handleChange} placeholder='Responsável' />


                    <input type="text" name="tipo" value={filters.tipo} onChange={handleChange} placeholder='Tipo' />

                    <input type="text" name="localizacao" value={filters.localizacao} onChange={handleChange} placeholder='Localização' />

                    <label>Status Operacional:</label>
                    <input type="checkbox" name="status_operacional" checked={filters.status_operacional} onChange={handleChange} />
                <button className={estilos.botao} type="submit">Filtrar</button>
            </form>

            {error && <div>Erro ao buscar sensores: {error.message}</div>}

            <div className={estilos.conteiner}>
                <h2>Sensores filtrados aparecerão abaixo: </h2>
            {loading && <div>Carregando...</div>}

                    <div className={estilos.allSensorsFiltered}>
                    {sensors.map(sensor => (
                       <div key={sensor.id} className={estilos.oneSensorFiltered}>
                       <h4 className={estilos.tituloSensor}>{sensor.tipo}</h4>
                       <p>Localização: {sensor.localizacao}</p>
                       <p>Responsável: {sensor.responsavel}</p>
                   </div>
                    )) }
                    </div>
                
            </div>
        </div>
        </div>
    );
};


