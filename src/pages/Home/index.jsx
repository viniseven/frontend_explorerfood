import { useState, useEffect } from 'react';

import { Container } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { Carrousel } from '../../components/Carrousel';

import cookie from '../../assets/cookie.svg';
import { api } from '../../services/api';

export function Home() {
	const [searchDishe, setSearchDishe] = useState('');
	const [dishes, setDishes] = useState([]);

	const dataValueInput = (valueSearch) => {
		setSearchDishe(valueSearch);
	};

	useEffect(() => {
		async function fetchDishes() {
			const response = await api.get(
				`/dishes?name=${searchDishe}&ingredient=${searchDishe}`,
			);

			setDishes(response.data);
		}

		fetchDishes();
	}, [searchDishe]);

	const categoryRefeicao = dishes.filter(
		(dishe) => dishe.category === 'Refeicoes',
	);

	const categorySobremesas = dishes.filter(
		(dishe) => dishe.category === 'Sobremesas',
	);

	const categoryBebidas = dishes.filter(
		(dishe) => dishe.category === 'Bebidas',
	);

	return (
		<Container>
			<Header valueInput={dataValueInput} />
			<main>
				<div className="text-header">
					<img
						src={cookie}
						alt="Imagem de cookies flutuando no ar com folhas e frutas"
					/>

					<div>
						<h1>Sabores inigualáveis</h1>
						<p>Sinta o cuidado do preparo com ingredientes selecionados</p>
					</div>
				</div>

				<div className="content-sections">
					{categoryRefeicao.length > 0 && (
						<Section title="Refeições">
							<Carrousel dishes={categoryRefeicao} />
						</Section>
					)}

					{categorySobremesas.length > 0 && (
						<Section title="Sobremesas">
							<Carrousel dishes={categorySobremesas} />
						</Section>
					)}

					{categoryBebidas.length > 0 && (
						<Section title="Bebidas">
							<Carrousel dishes={categoryBebidas} />
						</Section>
					)}
				</div>
			</main>
			<Footer />
		</Container>
	);
}
