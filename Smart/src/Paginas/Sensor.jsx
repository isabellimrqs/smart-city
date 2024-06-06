import React, { useEffect, useState } from 'react';
import axios from 'axios';
import estilos from './Sensor.module.css';
import { Cabecalho } from '../Componentes/Cabecalho';

export default function Sensor() {
    const [sensores, setSensores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSensores() {
            try {
                const token = localStorage.getItem('access_token');
                const response = await axios.get('http://127.0.0.1:8000/api/sensores/', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setSensores(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }

        fetchSensores();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro ao carregar os dados: {error.message}</div>;
    }

    return (
        <div>
        <Cabecalho/>

        <div className={estilos.container}>
            <h1>Lista de Sensores</h1>
            
            <div className={estilos.sensoresContainer} >
                    {sensores.map(sensor => (
                        <div key={sensor.id} className={estilos.sensorContainer}>
                            <p>ID: {sensor.id}</p>
                            <p>Tipo: {sensor.tipo}</p>
                            <p>Localização: {sensor.localizacao}</p>
                            <p>Responsável: {sensor.responsavel}</p>
                            <p>Longitude: {sensor.longitude}</p>
                            <p>Latitude: {sensor.latitude}</p>
                        </div>
                    ))}
                </div>
           
        </div>
        </div>
    );
}
