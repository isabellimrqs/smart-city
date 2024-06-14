import React, { useEffect, useState } from 'react';
import axios from 'axios';
import estilos from './Sensor.module.css';
import { Cabecalho } from '../Componentes/Cabecalho';
import PaginaErro from './PaginaErro';
import { useNavigate, Link } from 'react-router-dom';

export default function Sensor() {
    const navigate = useNavigate();
    const [sensores, setSensores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [sensorToDelete, setSensorToDelete] = useState(null);

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

    const handleDelete = (sensor) => {
        setSensorToDelete(sensor);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        try {
            const token = localStorage.getItem('access_token');
            await axios.delete(`http://127.0.0.1:8000/api/sensores/${sensorToDelete.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const updatedSensores = sensores.filter(s => s.id !== sensorToDelete.id);
            setSensores(updatedSensores);
            setShowDeleteModal(false);
            setSensorToDelete(null);
        } catch (error) {
            console.error('Erro ao excluir o sensor', error);
        }
    };

    const cancelDelete = () => {
        setShowDeleteModal(false);
        setSensorToDelete(null);
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <PaginaErro mensagem={`Erro ao carregar os dados: ${error.message}`} />;
    }

    return (
        <div>
            <Cabecalho/>

            <div className={estilos.container}>
                <h1>Lista de Sensores</h1>
                
                <div className={estilos.sensoresContainer} >
                    {sensores.map(sensor => (
                        <div key={sensor.id} className={estilos.sensorContainer}>
                            <h4 className={estilos.tituloSensor}>{sensor.tipo}</h4>
                            <p>ID: {sensor.id}</p>
                            <p>Localização: {sensor.localizacao}</p>
                            <p>Responsável: {sensor.responsavel}</p>
                            <p>Longitude: {sensor.longitude}</p>
                            <p>Latitude: {sensor.latitude}</p>
                            <p>Obs: {sensor.observacao}</p>
                            <p>Unidade de medida: {sensor.unidade_medida}</p>
                            
                            <div className={estilos.botoes}>
                                <Link to={`/atualizarsensor/${sensor.id}`}>
                                    <button className={estilos.buttonCancela}>Atualizar</button>
                                </Link>
                                <button onClick={() => handleDelete(sensor)}  className={estilos.buttonSim}>Excluir</button>
                            </div>
                        </div>
                    ))}
                    
                </div>

                {showDeleteModal && (
                    <div className={estilos.modal}>
                        <div className={estilos.modalContent}>
                            <div className={estilos.buttonContainer}></div>
                            <p>Deseja realmente excluir este sensor?</p>
                            <button className={estilos.buttonSim} onClick={confirmDelete}>Sim</button>
                            <button className={estilos.buttonCancela} onClick={cancelDelete}>Cancelar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
