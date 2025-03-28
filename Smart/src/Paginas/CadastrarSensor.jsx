// src/Paginas/CadastrarSensor.jsx
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import estilos from './CadastrarSensor.module.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Cabecalho } from '../Componentes/Cabecalho';

const schemaSensor = z.object({
    tipo: z.string().min(1,'Tipo é obrigatório'),
    mac_address: z.string().min(1, 'Mac Address é obrigatório').max(20, 'Máximo de 20 caracteres'),
    latitude: z.string().refine(val => !isNaN(parseFloat(val)), 'Latitude inválida'), // com ponto e não virgula
    longitude: z.string().refine(val => !isNaN(parseFloat(val)), 'Longitude inválida'),  // com ponto e não virgula
    localizacao: z.string().min(1, 'Localização é obrigatório').max(100, 'Máximo de 100 caracteres'),
    responsavel: z.string().min(1, 'Responsável é obrigatório').max(100, 'Máximo de 100 caracteres'),
    unidade_medida: z.string().min(1, 'Unidade de medida é obrigatório').max(20, 'Máximo de 20 caracteres'),
    status_operacional: z.boolean(),
    observacao: z.string().nullable(),
}); // precisa preencher TODOS os campos...

export default function CadastrarSensor() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schemaSensor)
    });

    async function obterDadosFormulario(data) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/sensores/', data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });

            alert('Sensor cadastrado com sucesso!');
            navigate('/listasensor'); // Redireciona para a página inicial após o cadastro
        } catch (error) {
            console.error('Erro no cadastro de sensor', error);
        }
    }

    return (

        <div>
            <Cabecalho/>
        <div className={estilos.container}>
            <div className={estilos.containerTitulo}>
            <h1 className={estilos.titulo}>Cadastro de Sensor</h1>
            </div>

            <form className={estilos.formulario} onSubmit={handleSubmit(obterDadosFormulario)}>
                <select {...register('tipo')} className={estilos.campo}>
                    <option value="">Selecione o tipo de sensor</option>
                    <option value="Temperatura">Temperatura</option>
                    <option value="Contador">Contador</option>
                    <option value="Luminosidade">Luminosidade</option>
                    <option value="Umidade">Umidade</option>
                </select>
                {errors.tipo && <p className={estilos.mensagem}>{errors.tipo.message}</p>}

                <input {...register('mac_address')} className={estilos.campo} placeholder="MAC Address" />
                {errors.mac_address && <p className={estilos.mensagem}>{errors.mac_address.message}</p>}

                <input {...register('latitude')} className={estilos.campo} placeholder="Latitude" />
                {errors.latitude && <p className={estilos.mensagem}>{errors.latitude.message}</p>}

                <input {...register('longitude')} className={estilos.campo} placeholder="Longitude" />
                {errors.longitude && <p className={estilos.mensagem}>{errors.longitude.message}</p>}

                <input {...register('localizacao')} className={estilos.campo} placeholder="Localização" />
                {errors.localizacao && <p className={estilos.mensagem}>{errors.localizacao.message}</p>}

                <input {...register('responsavel')} className={estilos.campo} placeholder="Responsável" />
                {errors.responsavel && <p className={estilos.mensagem}>{errors.responsavel.message}</p>}

                <input {...register('unidade_medida')} className={estilos.campo} placeholder="Unidade de Medida" />
                {errors.unidade_medida && <p className={estilos.mensagem}>{errors.unidade_medida.message}</p>}

                <label className={estilos.campoCheckbox}>
                    Status Operacional:   
                    <input {...register('status_operacional')} type="checkbox" />
                </label>

                <textarea {...register('observacao')} className={estilos.campo} placeholder="Observação"></textarea>
                {errors.observacao && <p className={estilos.mensagem}>{errors.observacao.message}</p>}

                <button className={estilos.botao} onSubmit={handleSubmit(obterDadosFormulario)}>Cadastrar</button>
            </form>
        </div>
        </div>
    );
}
