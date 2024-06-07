import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import estilos from './Login.module.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Logo from '../assets/logo.svg'

const schemaLogin = z.object({
    usuario: z.string().min(1, 'Campo obrigatório').max(20, 'Máximo de 10 caracteres'),
    email: z.string().min(1, 'Campo obrigatório').email("Email inválido"),
    senha: z.string().min(1, 'Campo obrigatório').max(15, 'Máximo de 15 caracteres'),
});

export function Signup() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schemaLogin)
    });

    async function obterDadosFormulario(data) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                username: data.usuario,
                email: data.email,
                password: data.senha
            });

            const { access, refresh } = response.data;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

        } catch (error) {
            console.error('Erro de autenticação', error);
        }
    }
    async function criarUsuario(data) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/create_user/', {
                username: data.usuario,
                email: data.email,
                password: data.senha
            });

            const { access, refresh } = response.data;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            console.log('Login bem-sucedido!');
            navigate('/'); // Redireciona para a página de login
        } catch (error) {
            console.error('Erro de autenticação', error);
        }
    }

    return (
        <div className={estilos.conteiner}>

            <div className={estilos.containerForm}>
            <img className={estilos.titulo} src={Logo}></img>

            <form className={estilos.formulario} onSubmit={handleSubmit(obterDadosFormulario)}>
                <input
                    {...register('usuario')}
                    className={estilos.campo}
                    placeholder="Usuário"
                />
                {errors.usuario && (
                    <p className={estilos.mensagem}>{errors.usuario.message}</p>
                )}

                <input
                    {...register('email')}
                    type="email"
                    className={estilos.campo}
                    placeholder="Email"
                />
                {errors.senha && (
                    <p className={estilos.mensagem}>{errors.senha.message}</p>
                )}
                <input
                    {...register('senha')}
                    type="password"
                    className={estilos.campo}
                    placeholder="Senha"
                />
                {errors.senha && (
                    <p className={estilos.mensagem}>{errors.senha.message}</p>
                )}
                <p className={estilos.cadastroText}>Já possui conta? <Link className={estilos.a} to='/'>Login</Link></p>

                <button className={estilos.botao} onSubmit={handleSubmit(criarUsuario)}>Entrar</button>
            </form>
            </div>
        </div>
    );
}
