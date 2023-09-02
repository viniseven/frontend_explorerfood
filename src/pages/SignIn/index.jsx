import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import logoImg from '../../assets/logo.svg';

export function SignIn() {
	const { signIn } = useAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSignIn() {
		signIn({ email, password });
	}

	return (
		<Container>
			<div className="brand">
				<img src={logoImg} alt="" />
				<h1>food explorer</h1>
			</div>

			<Form>
				<h1>Faça login</h1>

				<div className="input-wrapper">
					<label htmlFor="email">Email</label>
					<Input
						placeholder="Exemplo: exemplo@exemplo.com.br"
						type="text"
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

				<Button title="Entrar" onClick={handleSignIn} />

				<Link to="/signup">
					<ButtonText title="Criar uma conta" className="btn-signup" />
				</Link>
			</Form>
		</Container>
	);
}
