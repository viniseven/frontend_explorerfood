import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import logoImg from '../../assets/logo.svg';

import { api } from '../../services/api';

export function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	function handleSignUp() {
		if (!name || !email || !password) {
			return alert('Por favor, preencha todos os campos');
		}
		if (password.length < 6) {
			return alert('Insira uma senha de no mínimo 6 caracteres');
		}

		api
			.post('/users', { name, email, password })
			.then(() => {
				alert('Usuário cadastrado com sucesso!');

				navigate('/');
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert('Não foi possível cadastrar, tente novamente');
				}
			});
	}

	return (
		<Container>
			<div className="brand">
				<img src={logoImg} alt="" />
				<h1>food explorer</h1>
			</div>

			<Form>
				<h1>Crie sua conta</h1>

				<div className="input-wrapper">
					<label htmlFor="email">Seu nome</label>
					<Input
						placeholder="Exemplo: Maria da Silva"
						type="text"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className="input-wrapper">
					<label htmlFor="password">Email</label>
					<Input
						placeholder="Exemplo: exemplo@exemplo.com.br"
						type="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="input-wrapper">
					<label htmlFor="password">Senha</label>
					<Input
						placeholder="No mínimo 6 caracteres"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<Button title="Criar conta" onClick={handleSignUp} />

				<Link to="/">
					<ButtonText title="Já tenho uma conta" />
				</Link>
			</Form>
		</Container>
	);
}
